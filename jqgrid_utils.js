/**
 * A module for Jqgrid_utils
 * @module Jqgrid_utils
 */

"use strict";

module.exports = class Vanilla_website_utils {
  constructor(settings = false) {
    if (settings) {
      if (settings.hasOwnProperty("page")) {
        this.page = settings["page"];
        localStorage.setItem("page", this.page);
      }
    }
  }

  /**
* Syncron Alias grid_sum_on 
@alias module:Jqgrid_utils
*/
  async _grid_substract_on(
    grid,
    minuend = [],
    subtrahend = [],
    difference,
    no_negative = false,
  ) {
    return await this.grid_substract_on(
      grid,
      minuend,
      subtrahend,
      difference,
      no_negative,
    );
  }

  /**
* Sum the columns values together 
@alias module:Jqgrid_utils
@param {object} - Grid Object (required)
@param {array} - string array list of field_names used as minuend(number from which the other number is subtracted)
@param {array} - string array list of field_names used as subtrahend(number which is to be subtracted from the minuend)
@param {string} - string field name for the difference(number which is to be subtracted from the minuend)
@param {bolen} - true or 1 to not show negative numbers   

@example
var jqu = new Jqgrid_utils({page:page});
gridComplete: function () {
        jqu._jqu._grid_sum_on(this, [
          "qty_icollect",
          "qty_ordered",
          "need_for_qty_ordered",
          "wait_icollect",
        ]);
      },
*/
  async grid_substract_on(
    grid,
    minuend = [],
    subtrahend = [],
    difference,
    no_negative = false,
  ) {
    let $self = jQuery(grid);
    let rows = $self.jqGrid("getGridParam", "data");
    let footer = { invdate: "Total" };
    let _minuend = 0.0;
    let _subtrahend = 0.0;
    for (let i in minuend) {
      let sum = 0;
      for (let r in rows) {
        if (rows[r].hasOwnProperty(minuend[i])) {
          let val = rows[r][minuend[i]];
          if (typeof val === "string") {
            if (is_digit(val)) {
              val = parseFloat(val);
            }
          }
          sum += val;
        }
      }
      if (sum != Math.floor(sum)) {
        sum = sum.toFixed(2);
      }
      footer[minuend[i]] = sum;
      _minuend = sum;
    }

    for (let i in subtrahend) {
      let sum = 0;
      for (let r in rows) {
        if (rows[r].hasOwnProperty(subtrahend[i])) {
          let val = rows[r][subtrahend[i]];
          if (typeof val === "string") {
            if (is_digit(val)) {
              val = parseFloat(val);
            }
          }
          sum += val;
        }
      }
      if (sum != Math.floor(sum)) {
        sum = sum.toFixed(2);
      }
      footer[subtrahend[i]] = sum;
      _subtrahend = sum;
    }

    let diff = _minuend - _subtrahend;
    if (no_negative) {
      if (diff < 0) {
        diff = 0;
      }
    }
    footer[difference] = diff;

    $self.jqGrid("footerData", "set", footer);

    return footer;
  }

  /**
* Syncron Alias grid_ratio_on 
@alias module:Jqgrid_utils
*/
  _grid_ratio_on(grid, fraction_col, denominator_col, ratio_col) {
    return this.grid_ratio_on(grid, fraction_col, denominator_col, ratio_col);
  }

  /**
* Get the ratio the columns values together 
@alias module:Jqgrid_utils
@param {object} - Grid Object (required)
@param {string} - Column/Field Name for value 1
@param {string} - Column/Field Name for value 2
@param {string} - Column/Field Name to the set the target ratio 
@example
var jqu = new Jqgrid_utils({page:page});
      gridComplete: function()
      {
       	jqu._grid_ratio_on(this, 'actual_days', 'plan_days', 'qc_eta_ratio');
      },

*/
  async grid_ratio_on(grid, fraction_col, denominator_col, ratio_col) {
    var allrows = jQuery("#grid").jqGrid("getGridParam", "data");
    let $self = jQuery(grid);
    let rows = $self.jqGrid("getGridParam", "data");
    let footer = {
      invdate: "Total",
    };
    let sum = 0;
    fraction_sum = 0;
    denominator_sum = 0;
    ratio_sum = 0;
    for (let r in rows) {
      if (rows[r].hasOwnProperty(fraction_col)) {
        fraction_sum += rows[r][fraction_col];
      }
      if (rows[r].hasOwnProperty(denominator_col)) {
        denominator_sum += rows[r][denominator_col];
      }
    }
    footer["qc_eta_ratio"] = (fraction_sum / denominator_sum).toFixed(2);
    $self.jqGrid("footerData", "set", footer);
    return footer;
  }

  /**
* Check if the string is html
@alias module:Jqgrid_utils
@param {string} - String of any kind
@returns {boolean} - true or false 
*/
  is_html(str) {
    let r = false;
    try {
      const doc = new DOMParser().parseFromString(str, "text/html");
      const a = Array.from(doc.body.childNodes).some((n) => n.nodeType === 1);
      console.log(a);
      if (a) {
        r = true;
      }
    } catch (err) {}
    return r;
  }

  /**
* Syncron Alias grid_sum_on 
@alias module:Jqgrid_utils
*/
  async _grid_sum_on(grid, fields = []) {
    return await this.grid_sum_on(grid, fields);
  }

  /**
* Sum the columns values together 
@alias module:Jqgrid_utils
@param {object} - Grid Object (required)
@param {string} - Column/Field Name to sum 
@example
var jqu = new Jqgrid_utils({page:page});
gridComplete: function () {
        jqu._jqu._grid_sum_on(this, [
          "qty_icollect",
          "qty_ordered",
          "need_for_qty_ordered",
          "wait_icollect",
        ]);
      },
*/
  async grid_sum_on(grid, fields = []) {
    let $self = jQuery(grid);
    let rows = $self.jqGrid("getGridParam", "data");
    let footer = {
      invdate: "Total",
    };
    for (let i in fields) {
      let sum = 0;
      for (let r in rows) {
        let _val = 0;
        if (rows[r].hasOwnProperty(fields[i])) {
          let val = rows[r][fields[i]];
          if (val) {
            if (typeof val === "string") {
              if (this.is_html(val)) {
                const doc = new DOMParser().parseFromString(val, "text/html");
                const _a = doc.querySelectorAll("a");
                const a = Array.from(_a).map((a) => a.text);
                if (a.length) {
                  const n = a[0].replace(",", "");
                  if (is_digit(n)) {
                    _val = parseFloat(n);
                  }
                }
              } else {
                if (is_digit(val)) {
                  _val = parseFloat(val);
                }
              }
            } else if (typeof val === "number") {
              _val = val;
            }
            sum += _val;
          }
        }
      }
      //let number = new Intl.NumberFormat('en-En', { style: 'currency', currency: 'USD' }).format(sum);
      if (sum != Math.floor(sum)) {
        sum = sum.toFixed(2);
      }
      footer[fields[i]] = sum;
    }
    $self.jqGrid("footerData", "set", footer);
    return footer;
  }

  /**
* Syncron Alias grid_avg_on 
@alias module:Jqgrid_utils
*/
  _grid_avg_on(grid, fields = []) {
    return this.grid_avg_on(grid, fields);
  }

  /**
* Average the column values together 
@alias module:Jqgrid_utils
@param {object} - Grid Object (required)
@param {array} - Column/Field Names to where the average of each column should be calculated
@example
var jqu = new Jqgrid_utils({page:page});

   gridComplete: function()
      {
	jqu._grid_avg_on(this, ['diff_plan_to_actual', 'days_early', 'days_late']);
      },


*/

  async grid_avg_on(grid, fields = []) {
    let $self = jQuery(grid);
    let rows = $self.jqGrid("getGridParam", "data");
    let count = 0;
    let footer = {
      invdate: "Total",
    };
    for (let i in fields) {
      let sum = 0;
      for (let r in rows) {
        if (rows[r].hasOwnProperty(fields[i])) {
          let val = rows[r][fields[i]];
          if (typeof val === "string") {
            if (is_digit(val)) {
              val = parseFloat(val);
            }
          }
          sum += val;
          count++;
        }
      }
      sum = sum / count;
      if (sum != Math.floor(sum)) {
        sum = sum.toFixed(2);
      }
      footer[fields[i]] = sum;
    }
    $self.jqGrid("footerData", "set", footer);
    return footer;
  }

  /**
* Syncron Alias grid_percent_on 
@alias module:Jqgrid_utils
*/
  _grid_percent_on(grid, obj) {
    return grid_percent_on(grid, obj);
  }

  /**
* Percent the columns values together 
@alias module:Jqgrid_utils
@param {object} - Grid Object (required)
@param {string} - Column/Field Name to sum 
@example
var jqu = new Jqgrid_utils({page:page});
gridComplete: function () {
        jqu._jqu._grid_sum_on(this, [
          "qty_icollect",
          "qty_ordered",
          "need_for_qty_ordered",
          "wait_icollect",
        ]);
      },
*/
  async grid_percent_on(grid, obj) {
    let $self = jQuery(grid);
    let rows = $self.jqGrid("getGridParam", "data");
    let footer_sum = {};
    let id = obj["id"] ? obj["id"] : "invate";
    footer[id] = "Total";
    let total = obj["total"];
    let sums = JSON.parse(JSON.stringify(obj["percent"]));
    sums.push(total);
    for (let i in sums) {
      let field = sums[i];
      let sum = 0;
      let _rows = 0;
      for (let r in rows) {
        if (rows[r].hasOwnProperty(field)) {
          let val = rows[r][field];
          if (typeof val === "string") {
            if (is_digit(val)) {
              val = parseFloat(val);
              sum += val;
              _rows++;
            }
          } else {
            sum += val;
            _rows++;
          }
        }
      }
      footer_sum[field] = sum;
    }

    for (let i in sums) {
      let field = sums[i];
      let percent = footer_sum[field] / (footer_sum[total] / 100);
      percent = percent.toFixed(2);
      footer[field] = percent + "%";
    }
    $self.jqGrid("footerData", "set", footer);
  }

  /**
* Takes the updated columns data and send it to your API post server
* loadComplete: async function() for the old record needs to be called, see example  !
@alias module:Jqgrid_utils
@param {object} - Grid Object (required)
@param {string} - API URL like https://foo.com (required)
@param {array}  - id list, ids from the column header (required)
@param {object} - settings - extra key:value to send to your server 

@example
var jqu = new Jqgrid_utils({page:page});

....},
    loadComplete: async function()
    {
       $grid.jqGrid('setGridParam',{record_data:$grid.jqGrid("getGridParam").data});
    },
      afterSetRow: async function(row)
      {
        const _api = await get_api_url('sapir');
        const api = _api + '/column2';
        let info = {"msg":"failed"};
        var jqu = new Jqgrid_utils();
        info = await jqu.update_row_to_api($grid, api,['id'],row,{server : '232',db : 'sl_h',table : 'kpi',});
        for(let i in info)
        {
          log.info(info[i]);
        }
      },
*/

  async update_row_to_api(_self, api = "", _ids = ["id"], row = {}, data) {
    let self = this;
    let infos = [];
    let ids = {};
    let values = {};
    let changed = {};
    const rd = _self.jqGrid("getGridParam", "record_data");

    if (
      api != "" &&
      Object.keys(row).length > 0 &&
      row.inputData.oper == "edit"
    ) {
      for (let i in rd) {
        if (rd[i]["id"] === row.rowid) {
          for (let ii in _ids) {
            if (rd[i].hasOwnProperty(_ids[ii])) {
              ids[_ids[ii]] = rd[i][_ids[ii]];
            }
          }

          for (let iii in row.inputData) {
            if (iii != "oper") {
              if (Object.keys(ids).indexOf(iii) < 0) {
                //console.log(iii);
                //console.log(row.inputData[iii]);
                //console.log(rd[i][iii]);
                if (row.inputData[iii] != rd[i][iii]) {
                  changed[iii] = row.inputData[iii];
                }
              }
            }
          }
        }
      }

      for (let i in changed) {
        if (Object.keys(ids).indexOf(i) < 0 && i != "oper") {
          const col_name = i;
          let col_value = {};
          col_value[col_name] = changed[i];
          data["ids"] = ids;
          data["values"] = col_value;
          data["operator"] = "edit";
          //console.log(data)
          const info = await self.post_json(api, JSON.stringify(data));
          infos.push(info);
        }
      }
    } else if (
      api != "" &&
      Object.keys(row).length > 0 &&
      row.inputData.oper == "add"
    ) {
      console.log("...add");
      for (let i in row.inputData) {
        if (row.inputData[i] && i != "id" && i != "oper") {
          values[i] = row.inputData[i];
        }
      }
      data["ids"] = ids;
      data["values"] = values;
      data["operator"] = "add";
      //console.log(data);
      let info = await self.post_json(api, JSON.stringify(data));
      infos.push(info);
    }

    return infos;
  }

  /**
 * After Delete a Grid Row send to and DELETE REST Request
 * You need to define loadComplete and afterDelRow
 * The Grid data needs to be saved as record within loadComplete
 @alias module:Jqgrid_utils
@param {object} - Grid Object (required)
@param {string} - API URL like https://foo.com (required)
@param {string}  - the row id value from afterDelRow (required)
@param {array}  - id list, ids from the column header colmodel (required)
@param {object} - settings - extra key:value to send to your server
@example 

    loadComplete: async function()
    {
       $grid.jqGrid('setGridParam',{record_data:$grid.jqGrid("getGridParam").data});
    },
      afterDelRow: async function(rowid)
      {
        const _api = await get_api_url('sapir');
        const api = _api + '/column2';
        let info = {"msg":"failed"};
          var jqu = new Jqgrid_utils();
    
          info = await jqu.delete_row_to_api($grid,api,rowid,['id'],{
              server : '232',
              db : 'sl_h',
              table : 'kpi',
              operator: 'delete',
        });
        log.info(JSON.parse(info).msg);
      },





*/

  async delete_row_to_api(_self, api = "", rowid, _ids = [], data = {}) {
    let info = { msg: "failed" };
    let self = this;
    let ids = [];
    let values = {};
    const rd = _self.jqGrid("getGridParam", "record_data");
    for (let i in rd) {
      if (rd[i]["id"] === rowid) {
        for (let ii in _ids) {
          if (rd[i].hasOwnProperty(_ids[ii])) {
            values[_ids[ii]] = rd[i][_ids[ii]];
            ids.push(_ids[ii]);
          }
        }
        break;
      }
    }

    if (api != "" && Object.keys(values).length == ids.length) {
      data["ids"] = ids;
      data["values"] = values;
      //console.log(data);
      info = await self.adelete_api(api, JSON.stringify(data));
    }
    return info;
  }

  /**
*Append and sperator based link column to the end of a row 
@alias module:Jqgrid_utils
@param {object} - col_model of the grid
@param {string} - URL string 
@param {string} - field value - the visible text of the anchor
@param {object} - base row key value  - like {"name":'wiki','label':"Wiki"} 
@param {string} - URL Attributes
@param {object} - keys and fields value to use 
@example 
var jqu = new Jqgrid_utils();
col_model = await jqu.append_seperator_link_column(col_model, 'http://wiki.foo.com/index.php' ,'Wiki',{"name":'wiki','label':"Wiki","width":"65px","align":"center"} ,'target="_blank"',{"report_central":"name"});

*/

  async append_seperator_link_column(
    col_model,
    url,
    field_value,
    base,
    attr = "",
    keys,
  ) {
    url = url + "/";
    let self = this;
    base["formatter"] = function (cell_val, obj) {
      let _cell_val = field_value;
      if (typeof keys === "object") {
        let pref = "";
        for (let i in keys) {
          let key = i;
          let v = keys[i];
          let key_val = obj.rowData[v];
          if (key_val) {
            if (key_val) {
              if (key != "") {
                pref += key + "" + "/" + encodeURIComponent(key_val) + "/";
              } else {
                pref += encodeURIComponent(key_val);
              }
            }
          }
        }
        if (pref) {
          if (pref.slice(-1) === "&" || pref.slice(-1) === "/") {
            pref = pref.slice(0, -1);
          }
          cell_val =
            "<a " + attr + 'href="' + url + pref + '"> ' + _cell_val + "</a>";
        }
      }

      return cell_val;
    };

    col_model.push(base);

    return col_model;
  }

  /**
* add textarea 
@alias module:Jqgrid_utils
@param {object} - edittype like 
@example
let col_model = JSON.parse(await aget_api(url + "/model"));
col_model = await jqu.add_edit(col_model, 'mon',{ edittype:'textarea', editoptions:{rows:6,cols:100} });
see for other inputfields: 
http://www.trirand.com/blog/phpjqgrid/doc/_2v80w6oam.htm
*/
  async add_edit(col_model, edit_field, edittype, editoptions) {
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        Object.assign(col_model[i], edittype);
        Object.assign(col_model[i], editoptions);
      }
    }
    return col_model;
  }

  /**
* add textarea 
@alias module:Jqgrid_utils
@param {string} - edit_filed
@param {string} - style of the textaread
@example
let col_model = JSON.parse(await aget_api(url + "/model"));
col_model = await jqu.add_textarea(col_model, 'worker','style="width:100%;height:100px"');
*/
  async add_textarea(
    col_model,
    edit_field,
    style = 'style="width:100%;height:100px"',
  ) {
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        col_model[i]["formatter"] = function (cell_val) {
          const txt = "<textarea " + style + ">" + cell_val + "</textarea>";
          return txt;
        };
      }
    }
    return col_model;
  }

  /**
* Get basic colModel data from raw data
@alias module:Jqgrid_utils
@param {array} - grid object 
@param {array} - raw data object from loadComplete
@param {array} - list of columns to exclude (optional)
@param {array} - existing colModel (optional)
@returns {array} - col_model
@example
var jqu = new Jqgrid_utils();
,loadComplete: async function(data)
{
  let col_model = jQuery(this).jqGrid('getGridParam',"colModel");
  const new_col_model= await update_col_model(this, data, ['id','cust_qty','waiting_supplier_orders','waiting_assemblies','pending_components','pending_customer_order',col_model);
  jQuery(this).jqGrid('setGridParam',{colModel:new_col_model});
},
*/
  async get_col_model_from_data(obj, data, exclude = [], col_model = []) {
    let cols = [];
    for (let i in data) {
      const keys = Object.keys(data[i]);
      for (let ii in keys) {
        const key = keys[ii];
        cols.push(key);
      }
    }
    cols = cols.filter((item, pos) => cols.indexOf(item) === pos);
    let mcols = [];
    for (let i in col_model) {
      mcols.push(col_model[i]["name"]);
    }

    let diff = cols.filter((x) => !mcols.includes(x));
    const _exclude = new Set(exclude);
    diff = diff.filter((name) => {
      return !_exclude.has(name);
    });
    diff.sort();

    for (let x = 0; x < diff.length; x++) {
      col_model.push({ name: diff[x], label: diff[x] });
    }
    //console.log(col_model);
    return col_model;
  }

  /**
* Replace a Binaery 0 or 1 to other given value
@alias module:Jqgrid_utils
@param {string} - cell value
@param {string} - string replacement for 0
@param {string} - string replacement for 1
@example
var jqu = new Jqgrid_utils();
let _data = jqu.binery_replace(0,'zero','one');
or for column formatter
download_formatter:"var jqu = new Jqgrid_utils();jqu.binary_replace({0},'zero','one')"});
*/
  binary_replace(cell_value, a = "zero", b = "one") {
    let value = a;
    if (cell_value == 1 || cell_value == 0) {
      if (cell_value == 1) {
        value = b;
      }
    }
    return value;
  }

  /**
* Convert a 112 date string to a DMY format with sepertaor - sync function
@alias module:Jqgrid_utils
@param {string} - date string
@param {string} - seperator used
@example
var jqu = new Jqgrid_utils();
let _data = jqu._date112_to_DMY('20220104','/');
console.log(_data);
*/
  _date112_to_DMY(cell_value, seperator = "/") {
    let value = cell_value;
    if (cell_value.length >= 8 && cell_value.indexOf(seperator) === -1) {
      let a = [];
      a.push(cell_value.substr(6, 2));
      a.push(cell_value.substr(4, 2));
      a.push(cell_value.substr(0, 4));
      value = a.join(seperator);
    }
    return value;
  }

  /**
* Convert a 112 date to a DMY format with sepertaor
@alias module:Jqgrid_utils
@param {object} - col_model of the grid
@param {string} - name of the date 112 column what should get converted
@param {string} - seperator used
@example
var jqu = new Jqgrid_utils();
let _data = await jqu.date112_to_DMY(this,'field','/');
console.log(_data);
*/
  async date112_to_DMY(col_model, edit_field, seperator = "/") {
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        col_model[i]["formatter"] = function (cell_value, o) {
          if (cell_value) {
            cell_value = cell_value.toString();
            let value = cell_value;
            if (
              cell_value.length >= 8 &&
              cell_value.indexOf(seperator) === -1
            ) {
              let a = [];
              a.push(cell_value.substr(6, 2));
              a.push(cell_value.substr(4, 2));
              a.push(cell_value.substr(0, 4));
              value = a.join(seperator);
            }
            return value;
          } else {
            return cell_value;
          }
        };
      }
    }
    return col_model;
  }

  /**
* Add Formatter 
@alias module:Jqgrid_utils
@param {array}  - grid col_model
@param {string} - string columns names what will be formatted
@param {object} - formatter object like { formatter: "select", formatoptions: {value: "1:ok;0:fail", defaultValue: "1" }}
@example
var jqu = new Jqgrid_utils();
col_model = await jqu.add_formatter(col_model,'select',{ formatter: "select", formatoptions: {value: "1:ok;0:fail", defaultValue: "1" }})
*/

  async add_formatter(col_model, edit_field, formatter) {
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        if (
          formatter.hasOwnProperty("formatter") &&
          formatter.hasOwnProperty("formatoptions")
        ) {
          col_model[i]["formatter"] = formatter["formatter"];
          col_model[i]["formatoptions"] = formatter["formatoptions"];
          col_model[i]["edittype"] = formatter["formatter"];
          col_model[i]["editoptions"] = formatter["formatoptions"];
        }
      }
    }
    return col_model;
  }

  /**
* Natural Sort Column
@alias module:Jqgrid_utils
@param {array}  - grid col_model
@param {string} - string columns names for natural sorting
@returns {array} - col_model
@example
var jqu = new Jqgrid_utils();
col_model = await jqu.natural_sort(col_model,'colunmename');
*/

  async natural_sort(col_model, column_name) {
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === column_name) {
        col_model[i]["sortfunc"] = function (a, b, d) {
          if (d === undefined) {
            d = 1;
          }
          var re =
              /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
            sre = /(^[ ]*|[ ]*$)/g,
            dre =
              /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
            hre = /^0x[0-9a-f]+$/i,
            ore = /^0/,
            i = function (s) {
              return (self.insensitive && ("" + s).toLowerCase()) || "" + s;
            },
            // convert all to strings strip whitespace
            x = i(a).replace(sre, "") || "",
            y = i(b).replace(sre, "") || "",
            // chunk/tokenize
            xN = x
              .replace(re, "\0$1\0")
              .replace(/\0$/, "")
              .replace(/^\0/, "")
              .split("\0"),
            yN = y
              .replace(re, "\0$1\0")
              .replace(/\0$/, "")
              .replace(/^\0/, "")
              .split("\0"),
            // numeric, hex or date detection
            xD =
              parseInt(x.match(hre)) ||
              (xN.length != 1 && x.match(dre) && Date.parse(x)),
            yD =
              parseInt(y.match(hre)) ||
              (xD && y.match(dre) && Date.parse(y)) ||
              null,
            oFxNcL,
            oFyNcL;
          // first try and sort Hex codes or Dates
          if (yD)
            if (xD < yD) return -d;
            else if (xD > yD) return d;
          // natural sorting through split numeric strings and default strings
          for (
            var cLoc = 0, numS = Math.max(xN.length, yN.length);
            cLoc < numS;
            cLoc++
          ) {
            // find floats not starting with '0', string or 0 if not defined (Clint Priest)
            oFxNcL =
              (!(xN[cLoc] || "").match(ore) && parseFloat(xN[cLoc])) ||
              xN[cLoc] ||
              0;
            oFyNcL =
              (!(yN[cLoc] || "").match(ore) && parseFloat(yN[cLoc])) ||
              yN[cLoc] ||
              0;
            // handle numeric vs string comparison - number < string - (Kyle Adams)
            if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
              return isNaN(oFxNcL) ? d : -d;
            }
            // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
            else if (typeof oFxNcL !== typeof oFyNcL) {
              oFxNcL += "";
              oFyNcL += "";
            }
            if (oFxNcL < oFyNcL) return -d;
            if (oFxNcL > oFyNcL) return d;
          }
          return 0;
        };
      }
    }
    return col_model;
  }

  /**
* Add HTML Formatter 
@alias module:Jqgrid_utils
@param {array}  - grid col_model
@param {string} - string columns names what will be converted to ok buttons
@param {string} - html tag code 
@returns {array} - col_model
@example
var jqu = new Jqgrid_utils();
col_model = await jqu.add_html_formatter(col_model,'process',"<button tabindex='0' class='cellbtn' type='button'>Process</button>");
*/

  async add_html_formatter(col_model, edit_field, html) {
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        col_model[i]["formatter"] = function (cell_val, o) {
          return html;
        };
      }
    }
    return col_model;
  }

  /**
* Add an OK Button
@alias module:Jqgrid_utils
@param {array} - grid col_model
@param {array}  - list of columns names what will be converted to ok buttons
@returns {array} - col_model
@example
var jqu = new Jqgrid_utils();
col_model = await jqu.add_ok_button(col_model, ['checked']);
*/

  async add_ok_button(col_model, fields) {
    let self = this;
    for (let i = 0; i < col_model.length; i++) {
      if (fields.indexOf(col_model[i]["name"]) > -1) {
        col_model[i]["formatter"] = function (cell_val) {
          if (cell_val != undefined) {
            return self.__cell_format(cell_val, "format_ok");
          } else {
            return "";
          }
        };
      }
    }
    return col_model;
  }

  /**
* Get the filled cell data
@alias module:Jqgrid_utils
@param {object} - the grid object or its name
@param {array}  - list of columns names what will be collected
@returns {array} - table array
@example
var jqu = new Jqgrid_utils();
col_model = await jqu.get_filled_cell_table_dat("#gridname","fieldname");

*/
  async get_filled_cell_table_data(_grid, fields = []) {
    let d = jQuery(_grid).jqGrid("getGridParam", "data");
    let keys = fields;
    let _data = [];
    for (let i in d) {
      if (d[i].hasOwnProperty("id")) {
        let row = [d[i]["id"]];
        for (let x in keys) {
          if (d[i].hasOwnProperty(keys[x])) {
            row.push(d[i][keys[x]]);
          } else {
            row.push("");
          }
        }
        var f = row.filter(function (value, index, arr) {
          return value !== "";
        });
        if (Object.keys(f).length > 1) {
          _data.push(row);
        }
      }
    }
    return _data;
  }

  /**
* Get the filled cell data
@alias module:Jqgrid_utils
@param {object} - the grid object or its name
@param {array}  - list of columns names what will be collected
@returns {object} - json object of the colleted fields
@example
var jqu = new Jqgrid_utils();
let _data = await jqu.get_filled_cell_data(this,["P-","bulk","wholesale"]);
*/

  async get_filled_cell_data(_grid, fields = []) {
    let d = jQuery(_grid).jqGrid("getGridParam", "data");
    let keys = fields;
    let _data = [];
    for (let i in d) {
      if (d[i].hasOwnProperty("id")) {
        let row = { id: d[i]["id"] };
        for (let x in keys) {
          if (d[i].hasOwnProperty(keys[x])) {
            if (d[i][keys[x]] != "") {
              row[keys[x]] = d[i][keys[x]];
            }
          }
        }
        if (Object.keys(row).length > 1) {
          _data.push(row);
        }
      }
    }
    return _data;
  }

  /**
* Add an URL from the data to a specific cell/column 
@alias module:Jqgrid_utils
@param {object} - col_model of the grid
@param {string} - name of the column what should get convert to the url
@param {string} - the used url of the data 
@returns {object} https://foo.bar.com/av0_code/bar 
@example
var jqu = new Jqgrid_utils();
col_model = await jqu.set_link(col_model,'field_get_url','field_with_the_url','target="blank"');
console.log(_data);
*/
  async set_link(col_model, edit_field, url, attr = "") {
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        col_model[i]["formatter"] = function (cell_val, o) {
          return (
            '<a class="gl" ' +
            attr +
            'href="' +
            o.rowData[url] +
            '">' +
            cell_val +
            "</a>"
          );
        };
      }
    }
    return col_model;
  }

  /**
* Hide all columns execpt column 
* @alias module:Jqgrid_utils
* @param {object} - col_model of the grid
* @param {array} - array of names to not to  hide
* @returns {object} col_model
* @example
  col_model = await jqu.hide_all_columns_except(col_model,['supplier','customer']);
*/
  async hide_all_columns_except(col_model, fields) {
    for (let i = 0; i < col_model.length; i++) {
      if (fields.indexOf(col_model[i]["name"]) > -1) {
        col_model[i]["hidden"] = false;
      } else {
        col_model[i]["hidden"] = true;
      }
    }
    return col_model;
  }

  /**
* Hide a col_model column before load the grid
* @alias module:Jqgrid_utils
* @param {object} - col_model of the grid
* @param {string} - name of the column to hide
* @returns {object} col_model
* @example
  col_model = await jqu.hide_column(col_model,'wholesale');
  col_model = await jqu.hide_column(col_model,'wholesale_formula');
*/
  async hide_column(col_model, field) {
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === field) {
        col_model[i]["hidden"] = true;
      }
    }
    return col_model;
  }

  /**
@alias module:Jqgrid_utils
@param {object} - gridobject;
@param {object} - grid data (optional);
@example 
var jqu = new Jqgrid_utils();
loadComplete: function(){
  jqu.grid_set_caption(this);
},
*/

  s_grid_set_caption(_grid, data = []) {
    this.grid_set_captionn(_grid, (data = []));
  }

  /**
Adding the row count number to the caption 
@alias module:Jqgrid_utils
@param {object} - gridobject;
@param {object} - grid data (optional);
@example 
var jqu = new Jqgrid_utils();
loadComplete: function(){
  await jqu.grid_set_caption(this);
},
*/
  async grid_set_caption(_grid, data = []) {
    if (_grid) {
      const grid = jQuery(_grid);
      let count = 0;
      if (data.length === 0) {
        count = grid.jqGrid("getGridParam", "records");
      } else {
        count = data.length;
      }
      let caption = grid.jqGrid("getGridParam", "caption");
      const reg = /\d.*x/;
      const new_caption = caption.replace(reg, "");
      grid.jqGrid("setCaption", new_caption + " " + count + "x");
    }
  }

  /**
@alias module:Jqgrid_utils
@param {object} - the col_model of the grid
@param {string} - the name of the page(optional)
@param {object} - the grid objec(optional)
@example 
col_model = await jqu.resize_saved_cell_width(col_model);
*/
  s_resize_saved_cell_width(col_model, page = false, grid = false) {
    this.grid_set_caption(col_model, page, grid);
  }

  /**
@alias module:Jqgrid_utils
@param {object} - the col_model of the grid
@param {string} - the name of the page(optional)
@param {object} - the grid objec(optional)
@example 
col_model = await jqu.resize_saved_cell_width(col_model);
*/
  async resize_saved_cell_width(col_model, page = false, grid = false) {
    let key = page ? page : this.page;
    key += grid ? "-" + grid + "-w-" : "-grid-w-";
    for (let x = 0; x <= col_model.length; x++) {
      if (col_model[x]) {
        if (col_model[x]["name"]) {
          const name = col_model[x]["name"];
          const width = localStorage.getItem(key + name);
          if (width) {
            col_model[x]["width"] = width;
          }
        }
      }
    }
    return col_model;
  }

  /**
@alias module:Jqgrid_utils
@param {string} the width of the resized column
@param {string} column number what get resized
@param {string} not in use yet 
@example 
* var jqu = new Jqgrid_utils({page:'mypage'});
* resizeStop: jqu.resize_cell,
*/
  resize_cell(width, index, _page = false) {
    const col_model = jQuery(this).jqGrid("getGridParam", "colModel");
    if (col_model[index]) {
      if (col_model[index]["name"]) {
        const name = col_model[index]["name"];
        const page = _page ? _page : localStorage.getItem("page");
        const grid = this.id;
        let key = page + "-" + grid + "-w-" + name;
        localStorage.setItem(key, width);
        const cat = localStorage.getItem(key);
      }
    }
  }

  /**
* Upsert(insert or update) from the grid to an API 
@alias module:Jqgrid_utils
@param {object} - row object
@param {string} - url of the API
@param {string} - data oject 
@returns {object} {update: 'ok'} or {update: 'failed'}
@example
var jqu = new Jqgrid_utils();
afterSetRow: async function(row)
{
  let r = await jqu.upsert_row(row, 'http://api.com',{'key':'value'});
  console.log(r);
},
*/
  async upsert_row(row, url, req = {}) {
    if (row.rowid.startsWith("jqg")) {
      const r0 = await this.insert_row(row, url);
      return r0;
    } else {
      const r1 = await this.update_row(row, url);
      return r1;
    }
  }

  /**
* Insert from the grid to an API used by the upsert_row function 
@alias module:Jqgrid_utils
@param {object} - row object
@param {string} - URL of the API
@returns {object} Object from the the API like {update: 'ok'} or {update: 'failed'}
@example
var jqu = new Jqgrid_utils();
afterSetRow: async function(row)
{
  let r = await jqu.insert_row(row, 'http://api.com');
  console.log(r);
},
*/
  async insert_row(row, url) {
    let req = {};
    let ret = "";
    if (row.inputData.hasOwnProperty("id")) {
      req["_id"] = "id";
      req["_id_val"] = row.inputData["id"];
      for (let i in row.inputData) {
        req[i] = row.inputData[i];
      }
      delete req["id"];
      delete req["oper"];
      //console.log(req);
      ret = await this.put_json(url, JSON.stringify(req));
    }
    return ret;
  }

  /**
* Update from the grid to an API used by the upsert_row function 
@alias module:Jqgrid_utils
@param {object} - row object
@param {string} - url of the API
@param {string} - data oject 
@returns {object} Object from the the API like {update: 'ok'} or {update: 'failed'}
@example
var jqu = new Jqgrid_utils();
afterSetRow: async function(row)
{
  let r = await jqu.update_row(row, 'http://api.com',{'key':value});
  console.log(r);
},
*/

  async update_row(row, url, req = {}) {
    let ret = "";
    {
      if (!req["_id"]) {
        req["_id"] = "id";
      }
      req["_id_val"] = row.inputData["id"];
      for (let i in row.inputData) {
        req[i] = row.inputData[i];
      }
      delete req["id"];
      delete req["oper"];
      ret = await this.post_json(url, JSON.stringify(req));
    }
    return ret;
  }

  /**
* Delete from the grid to an API 
@alias module:Jqgrid_utils
@param {string} - row id
@param {string} - url of the API
@returns {object} @returns {object} Object from the the API like {delete: 'ok'} or {delete: 'failed'}
@example
var jqu = new Jqgrid_utils();
afterDelRow: async function(row)
{
  const r = await jqu.delete_row('id', 'http://api.com');
  console.log(r + ' : ' + row + ' - from API');
},
*/

  async delete_row(_id, url) {
    let ret = "";
    if (url.indexOf("?") > -1) {
      url += "&_id=" + encodeURIComponent(unescape(_id));
    } else {
      url += "?_id=" + encodeURIComponent(unescape(_id));
    }

    ret = JSON.parse(await this.adelete_api(url));
    return ret["message"];
  }

  /**
* Async Delete request used by function delete_row
@alias module:Jqgrid_utils
@param {string} - url of the API
@param {boalan} - header should be json type? default form type
@returns {object} @returns {object} Object from the the API like {delete: 'ok'} or {delete: 'failed'}
@example
var jqu = new Jqgrid_utils();
afterDelRow: async function(row)
{
  ret = JSON.parse(await jqu.adelete_api(url));
},
*/

  async adelete_api(url, json = false) {
    let ctype = "application/x-www-form-urlencoded";
    let body = null;
    if (json) {
      ctype = "application/json;charset=UTF-8";
      body = json;
    }
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("DELETE", url);
      xhr.setRequestHeader("Content-type", ctype);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(body);
    });
  }

  /**
* Async Post request used by the update_row function
@alias module:Jqgrid_utils
@param {string} - url of the API
@param {object} - json object
@returns {object} @returns {object} Object from the the API like {update: 'ok'} or {update: 'failed'}
@example
var jqu = new Jqgrid_utils();
ret = JSON.parse(await jqu.post_json(url,{'key':value,'key2':'value'}));
*/

  async post_json(url, data) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(data);
    });
  }

  /**
* Async Put request used by the insert_row function
@alias module:Jqgrid_utils
@param {string} - url of the API
@param {object} - json object
@returns {object} @returns {object} Object from the the API like {insert: 'ok'} or {insert: 'failed'}
@example
var jqu = new Jqgrid_utils();
ret = JSON.parse(await jqu.put_json(url,{'key':value,'key2':'value2'}));
*/
  async put_json(url, data) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("PUT", url);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(data);
    });
  }

  /**
* Hide the del iconf rom the grid
@alias module:Jqgrid_utils
@example
var jqu = new Jqgrid_utils();
jqu.hide_del_icon();
*/
  s_hide_del_icon() {
    hide_del_icon();
  }

  /**
* Hide the del iconf rom the grid
@alias module:Jqgrid_utils
@example
var jqu = new Jqgrid_utils();
await jqu.hide_del_icon();
*/
  async hide_del_icon() {
    jQuery(".ui-inline-del").each(function (index) {
      jQuery(this).html("");
    });
  }

  /**
* Convert a cell into a link/url with data from another cell and spit the value by comma - CSV
@alias module:Jqgrid_utils
@param {object} - col_model of the grid
@param {string} - URL string 
@param {string} - Column/Cell to use
@param {string} - URL Attributes
@param {object} - keys and fields value to use 
@param {object} - format info
@param {string} - seperator of the cell value to split (default is comma)
@example 
var jqu = new Jqgrid_utils();
col_model = await jqu.add_link_details_csv(col_model, host + '/html/report.html' , 'tags','target="_blank"',{"tags":"tags"},',');

*/
  async add_link_details_csv(
    col_model,
    url,
    edit_field,
    attr = "",
    keys,
    format,
    seperator = ",",
  ) {
    let self = this;
    if (url.indexOf("?") > -1) {
      url = url + "&";
    } else {
      url = url + "?";
    }

    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        col_model[i]["formatter"] = function (cell_val, obj) {
          let key_val = cell_val;
          const _cell_val = self.__cell_format(cell_val, format);
          const a = _cell_val.split(seperator);
          let cell_value = "";
          for (let x in a) {
            const x_value = a[x].trim();
            if (x_value) {
              if (typeof keys === "object") {
                let pref = "";
                for (let ii in keys) {
                  let key = ii;
                  let v = keys[ii];
                  key_val = obj.rowData[v];
                  if (key_val) {
                    if (key.indexOf("=") !== -1) {
                      pref =
                        pref +
                        "" +
                        key +
                        "" +
                        encodeURIComponent(x_value) +
                        "&";
                    } else {
                      pref =
                        pref +
                        "" +
                        key +
                        "=" +
                        encodeURIComponent(x_value) +
                        "&";
                    }
                  }
                }
                if (pref.slice(-1) === "&") {
                  pref = pref.slice(0, -1);
                }
                cell_value +=
                  "<a " +
                  attr +
                  'href="' +
                  url +
                  pref +
                  '"> ' +
                  x_value +
                  "</a>" +
                  seperator +
                  " ";
              }
            }
            cell_val = cell_value.trim();
            if (cell_val.slice(-1) === seperator) {
              //remove last seperator
              cell_val = cell_val.slice(0, -1);
            }
          }

          if (cell_val) {
            return cell_val;
          } else {
            return _cell_val;
          }
        };
      }
    }

    return col_model;
  }

  /**
* Compare 2 columns and give them a style class  when they have different content
* http://www.trirand.com/jqgridwiki/doku.php?id=wiki:methods
@alias module:Jqgrid_utils
@param {object} - grid object
@param {string} - first column
@param {string} - second column
@param {string} - css class name 
@example 
loadComplete: async function()
{
  await jqu.compare(this,'first_column','second_column','redlight');
  }
  
*/
  async compare(obj, column1, column2, css_class) {
    const rows = jQuery(obj).jqGrid("getGridParam", "data");
    for (let i in rows) {
      if (rows[i][column1] != rows[i][column2]) {
        jQuery(obj).jqGrid("setCell", rows[i]["id"], column1, "", css_class);
        jQuery(obj).jqGrid("setCell", rows[i]["id"], column2, "", css_class);
      }
    }
  }

  /**
* Compare 2 columns for smaller and give them a style class
* http://www.trirand.com/jqgridwiki/doku.php?id=wiki:methods
@alias module:Jqgrid_utils
@param {object} - grid object
@param {string} - first column
@param {string} - second column
@param {string} - css class name 
@example 
loadComplete: async function()
{
  await jqu.compare(this,'first_column','second_column','redlight');
  }
  
*/
  async compare_smaller(obj, column1, column2, css_class) {
    const rows = jQuery(obj).jqGrid("getGridParam", "data");
    for (let i in rows) {
      if (rows[i][column1] < rows[i][column2]) {
        jQuery(obj).jqGrid("setCell", rows[i]["id"], column1, "", css_class);
        jQuery(obj).jqGrid("setCell", rows[i]["id"], column2, "", css_class);
      }
    }
  }

  /**
* Compare 2 columns for bigger and give them a style class
* http://www.trirand.com/jqgridwiki/doku.php?id=wiki:methods
@alias module:Jqgrid_utils
@param {object} - grid object
@param {string} - first column
@param {string} - second column
@param {string} - css class name 
@example 
loadComplete: async function()
{
  await jqu.compare(this,'first_column','second_column','redlight');
  }
  
*/
  async compare_bigger(obj, column1, column2, css_class) {
    const rows = jQuery(obj).jqGrid("getGridParam", "data");
    for (let i in rows) {
      if (rows[i][column1] > rows[i][column2]) {
        jQuery(obj).jqGrid("setCell", rows[i]["id"], column1, "", css_class);
        jQuery(obj).jqGrid("setCell", rows[i]["id"], column2, "", css_class);
      }
    }
  }

  /**
* Set styles to individual cells, what are defined in a dedicated column
@alias module:Jqgrid_utils
@param {object} - grid object
@param {string} - name of the column what includes the style values what need to be in a strinify  json format
@example 
var jqu = new Jqgrid_utils();
       loadComplete: async function() {
        await jqu.set_styles(this);
        },
*/
  async set_styles(obj, style_column = "styles") {
    const rows = jQuery(obj).jqGrid("getGridParam", "data");

    for (let i in rows) {
      if (rows[i][style_column]) {
        const styles = JSON.parse(rows[i][style_column]);
        for (let ii in styles) {
          const rowid = rows[i]["id"];
          const name = ii;
          if (rows[i].hasOwnProperty(name)) {
            jQuery(obj).jqGrid("setCell", rowid, name, "", styles[ii]);
          }
        }
      }
    }
  }

  /**
   * Set a class to a row, what must be defined in a dedicated column called row.class
   * Once the grid is loaded, the functions  adds extra class to the row element
@alias module:Jqgrid_utils
@param {object} - grid id like #grid
@example 
var jqu = new Jqgrid_utils();
   loadComplete: async function() {
     await jqu.set_classes("#grid");
   },
*/
  async set_classes(grid_id) {
    const rows = jQuery(grid_id).getDataIDs();
    for (var i = 0; i < rows.length; i = i + 1) {
      const row = jQuery(grid_id).getRowData(rows[i]);
      var e = jQuery("#" + rows[i], jQuery(grid_id));
      e.removeClass("ui-widget-content");
      e.addClass(row.class);
    }
  }

  /**
* Convert a cell into a link/url with data from another cell
@alias module:Jqgrid_utils
@param {object} - col_model of the grid
@param {string} - URL string 
@param {string} - Column/Cell to use
@param {string} - URL Attributes
@param {object} - keys and fields value to use 
@example 
var jqu = new Jqgrid_utils();
col_model = await jqu.add_link_details(col_model,'http://foo.bar' , 'style','target="_blank"',{'key':'style'});
col_model = await jqu.add_link_details(col_model, host + '/html/table_size.html' , 'database','target="_blank"',{"database":"database","server":"server"});
*/
  async add_link_details(col_model, url, edit_field, attr = "", keys, format) {
    let self = this;
    if (url.indexOf("?") > -1) {
      url = url + "&";
    } else {
      url = url + "?";
    }

    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        col_model[i]["formatter"] = function (cell_val, obj) {
          cell_val = String(cell_val);
          let key_val = "";
          if (cell_val) {
            key_val = cell_val;
          }
          let t = "";
          if (cell_val) {
            t = cell_val.toString();
          }

          if (typeof keys === "object") {
            let pref = "";
            for (let ii in keys) {
              let key = ii;
              let v = keys[ii];
              key_val = obj.rowData[v];
              if (key_val) {
                if (key_val) {
                  if (key.indexOf("=") !== -1) {
                    pref =
                      pref + "" + key + "" + encodeURIComponent(key_val) + "&";
                  } else {
                    pref =
                      pref + "" + key + "=" + encodeURIComponent(key_val) + "&";
                  }
                }
              }
            }
            if (pref) {
              if (pref.slice(-1) === "&") {
                pref = pref.slice(0, -1);
              }
              const _cell_val = self.__cell_format(cell_val, format);

              if (t != "" && _cell_val && t) {
                cell_val =
                  "<a " +
                  attr +
                  'href="' +
                  url +
                  pref +
                  '"> ' +
                  _cell_val +
                  "</a>";
              } else {
                cell_val = "";
              }
            }
          }
          if (t) {
            return cell_val;
          } else {
            return "";
          }
        };
      }
    }

    return col_model;
  }

  /**
* Convert a cell into seperated based link/url like https://foo.bar.com/field/value/field/value
@alias module:Jqgrid_utils
@param {object} - col_model of the grid
@param {string} - URL string 
@param {string} - Column/Cell to use
@param {string} - URL Attributes
@param {object} - keys and fields value to use 
@example 
var jqu = new Jqgrid_utils();
col_model = await jqu.add_link_details_separator(col_model, url1 , 'style','target="_blank"',{"pricelist":"pricelist","style":"style"});                                         
col_model = await jqu.add_link_details_separator(col_model, 'https://foo.com' , 'target_column','target="_blank"',{"mykey":"myval"});
*/
  async add_link_details_separator(
    col_model,
    url,
    edit_field,
    attr = "",
    keys,
    format,
  ) {
    url = url + "/";
    let self = this;
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        col_model[i]["formatter"] = function (cell_val, obj) {
          let key_val = cell_val;

          if (typeof keys === "object") {
            let pref = "";
            for (let ii in keys) {
              let key = ii;
              let v = keys[ii];
              key_val = obj.rowData[v];
              if (key_val) {
                if (key_val) {
                  if (key != "") {
                    pref += key + "" + "/" + encodeURIComponent(key_val) + "/";
                  } else {
                    pref += encodeURIComponent(key_val);
                  }
                }
              }
            }
            if (pref) {
              if (pref.slice(-1) === "&" || pref.slice(-1) === "/") {
                pref = pref.slice(0, -1);
              }
              const _cell_val = self.__cell_format(cell_val, format);
              cell_val =
                "<a " +
                attr +
                'href="' +
                url +
                pref +
                '"> ' +
                _cell_val +
                "</a>";
            }
          }

          return cell_val;
        };
      }
    }

    return col_model;
  }

  /**
* Convert a cell into seperated based link/url include parameter based url like https://foo.bar.com/field.html?k=v
@alias module:Jqgrid_utils
@param {object} - col_model of the grid
@param {string} - URL string 
@param {array}  - array of dict 
@param {string} - URL Attributes
@example 
var jqu = new Jqgrid_utils();
  col_model = await jqu.add_link_separator(col_model, host + '/html' , 'style',[
        {
            'field':'pricelist',
            'extension':'.html',
            'fields':{'style':'style'}
        }
    ]);
 //other example
 col_model = await jqu.add_link_separator(col_model, 'https://wiki.salamander-jewelry.net/index.php/grid_loss' , 'e',[{'field':'e'}],'target="_blank"');
    
*/
  async add_link_separator(col_model, url, edit_field, fields, attr = "") {
    url = url + "/";
    let self = this;
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        col_model[i]["formatter"] = function (cell_val, obj) {
          let key_val = cell_val;
          let pref = "";
          for (let x in fields) {
            for (let xx in fields[x]) {
              if (xx === "field") {
                let field_value = obj.rowData[fields[x][xx]];
                pref += field_value;
              }
              if (xx === "extension") {
                pref += fields[x][xx];
              }
              if (xx === "fields") {
                pref += "?";
                for (let key in fields[x][xx]) {
                  let val = obj.rowData[fields[x][xx][key]];
                  pref = pref + "" + key + "=" + encodeURIComponent(val) + "&";
                }
              }
            }
          }
          if (pref) {
            if (pref.slice(-1) === "&" || pref.slice(-1) === "/") {
              pref = pref.slice(0, -1);
            }
            cell_val =
              "<a " + attr + 'href="' + url + pref + '"> ' + cell_val + "</a>";
          }

          return cell_val;
        };
      }
    }
    return col_model;
  }

  /**
* Private Function
@alias module:Jqgrid_utils
*/
  __cell_format(cell_value, format) {
    if (format == "format_ok") {
      if (cell_value == 0 || cell_value === "fail") {
        cell_value =
          '<i data-check="failed" class="fa fa-times-circle" aria-hidden="true" style="color:#ff0000;"></i>';
      } else {
        cell_value =
          '<i data-check="ok" class="fa fa-check-circle" aria-hidden="true" style="color:#008000;"></i>';
      }
    }
    return cell_value;
  }

  /**
@alias module:Jqgrid_utils
@param {string} - row_id
@param {string} - data id
@param {string} - url to request
@param {object} - col_model for the table
@param {string} - Add to the caption of the subgrid
@example 
subGrid: true,
,subGridRowExpanded: async function(_id, id) {
let data_url2 = api + '/process_locations?f=data&process=';
let col_model_url2 = api + '/process_locations?f=col_model';
let col_model2 = JSON.parse(await vwu.aget_api(col_model_url2));
await jqu.subgrid(_id, id, data_url2, col_model2,'Locations for Process');

let data_url = api + '/process_styles?f=data&process=';
let col_model_url = api + '/process_styles?f=col_model';
let col_model = JSON.parse(await vwu.aget_api(col_model_url));
 await jqu.subgrid(_id, id, data_url, col_model,'Styles for Process');
},

or

subGrid: true,
subGridRowExpanded: async function(_id, id) {
let row_data = jQuery(this).jqGrid ('getRowData', id);
let param={f:'data','style':row_data['style'],pricelist:'P-TENENGR1'};
let data_url = api + '/order_ln';
data_url = await add_parameters(data_url, param);
let col_model_url2 = api + '/order_ln?f=col_model';
let col_model2 = JSON.parse(await vwu.aget_api(col_model_url2));
await jqu.subgrid(_id, false, data_url, col_model2,'Order Lines for ' + row_data['style']);
},

*/
  async subgrid(_id, id, url, col_model, caption = "") {
    caption = caption != "" ? caption + " " : "";
    if (id) {
      url += id;
    } else {
      id = "";
    }
    let $s1 = jQuery(
      "<table style='margin: 5px 0' class='" + _id + "_t'></table>",
    );
    $s1.appendTo("#" + jQuery.jgrid.jqID(_id));
    $s1.jqGrid({
      caption: caption + id,
      colModel: col_model,
      datatype: "json",
      url: url,
      gridview: true,
      rownumbers: true,
      autoencode: true,
      sortname: "c1",
      sortorder: "desc",
    });
  }

  /**
@alias module:Jqgrid_utils
@param {object} - col_model for the grid
@param {string} - field what include the image/picture href path like http://mypicture.png
@param {int} - size of the picture
@param {bolen} - image path should be a link
@example 
col_model = await jqu.add_image(col_model, image_field, 60, false);
*/
  async add_image(col_model, edit_field, size, link = false) {
    if (size === undefined) {
      size = 60;
    }
    for (let i = 0; i < col_model.length; i++) {
      if (col_model[i]["name"] === edit_field) {
        col_model[i]["picture"] = true;
        col_model[i]["width"] = size;
        col_model[i]["height"] = size;
        col_model[i]["formatter"] = function (cell_val) {
          const cell_val2 = cell_val.toLowerCase();

          if (
            cell_val2.startsWith("https://", 0) ||
            cell_val2.startsWith("http://", 0)
          ) {
            if (
              cell_val2.includes(".png") ||
              cell_val2.includes(".jpg") ||
              cell_val2.includes(".jpeg") ||
              cell_val2.includes(".gif") ||
              cell_val2.includes(".svg") ||
              cell_val2.includes(".svgz") ||
              cell_val2.includes(".webp")
            ) {
              if (link) {
                return (
                  '<a target="blank" href="' +
                  cell_val +
                  '"><img src="' +
                  cell_val +
                  '" alt="my image" width="' +
                  size +
                  '" /></a>'
                );
              } else {
                return (
                  '<img src="' +
                  cell_val +
                  '" alt="my image" width="' +
                  size +
                  '" />'
                );
              }
            }
          }
          return cell_val;
        };
      }
    }
    return col_model;
  }

  /**
* Add a filter to the website beside the grid 
@alias module:Jqgrid_utils
@param {object} - grid object or grid string name
@param {object} - the grid data object
@param {object} - a dict with a array what should be filterd by the grid
@param {string} - id name of the DOM oject where the filter should be appened 
@example 
var jqu = new Jqgrid_utils();
var run_me_once = true;
gridComplete: async function(){
        if(run_me_once)
        {
          await jqu.set_filter(this, data, {material:[],section:[]}, '#filter');
          run_me_once = false;
        }
      },
*/
  async set_filter(grid, data, fx, append_to = "#filter") {
    jQuery(grid).jqGrid("setGridParam", { fdata: data });
    let f = document.querySelector(append_to);
    for (const i in data) {
      for (let x in fx) {
        fx[x].push(data[i][x]);
      }
    }

    for (let x in fx) {
      fx[x] = fx[x].filter((val, ind, arr) => arr.indexOf(val) === ind);
      fx[x].sort();
    }

    for (let x in fx) {
      let ul = document.createElement("ul");
      let lh = document.createElement("lh");
      lh.innerHTML = x;
      ul.appendChild(lh);
      for (let i in fx[x]) {
        let li = document.createElement("li");
        let l = document.createElement("label");
        l.innerHTML = fx[x][i];
        let c = document.createElement("input");
        c.setAttribute("type", "checkbox");
        c.setAttribute("class", x);
        c.setAttribute("id", x + "_" + fx[x][i]);
        l.setAttribute("for", x + "_" + fx[x][i]);
        c.value = fx[x][i];
        c.onchange = async () => {
          await this._filter(grid, fx);
        };
        li.appendChild(l);
        li.appendChild(c);
        ul.appendChild(li);
      }
      f.appendChild(ul);
    }
  }

  /**
* private function of set_filter 
@alias module:Jqgrid_utils
*/
  async _filter(grid, fx) {
    let _data = [];
    let data = jQuery(grid).jqGrid("getGridParam", "fdata");
    let filter = [];
    for (let x in fx) {
      let m = document.querySelectorAll("." + x);
      filter[x] = [];
      for (let i in m) {
        if (m[i].checked) {
          filter[x].push(m[i].value);
        }
      }
    }
    for (let i in data) {
      let include = false;
      for (let x in fx) {
        if (filter[x].indexOf(data[i][x]) != -1) {
          include = true;
        }
      }
      if (include) {
        _data.push(data[i]);
      }
    }
    jQuery(grid).jqGrid("clearGridData");
    jQuery(grid).jqGrid("setGridParam", { data: _data });
    jQuery(grid).trigger("reloadGrid");
  }
};
