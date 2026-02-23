# ![email_gateway](pages/public/img/logo.png) Jqgrid_utils

Convenient Functions for free jqGrid

# How to install:
```bashh
   npm install jqgrid_utils 
```

# Usage:
```html
  <script src="../node_modules/jqgrid_utils/dist/jqgrid_utils.js"></script>
```


# Example:
```javascript
  let jqu = new Jqgrid_utils();

```

# Documentation 
https://github.com/myridia/jqgrid_utils/blob/main/README.md

# Source code:
Source: https://github.com/myridia/jqgrid_utils/actions

<a name="module_Jqgrid_utils"></a>

## Jqgrid\_utils
A module for Jqgrid_utils


* [Jqgrid_utils](#module_Jqgrid_utils)
    * [module.exports#format_currency_on_value(col_model, edit_field, currency)](#exp_module_Jqgrid_utils--module.exports+format_currency_on_value) ⏏
    * [module.exports#format_currency(col_model, edit_field, currency)](#exp_module_Jqgrid_utils--module.exports+format_currency) ⏏
    * [module.exports#add_checkbox(col_model, field_name)](#exp_module_Jqgrid_utils--module.exports+add_checkbox) ⏏
    * [module.exports#add_class(col_model, field_name, class_name)](#exp_module_Jqgrid_utils--module.exports+add_class) ⏏
    * [module.exports#_grid_substract_on()](#exp_module_Jqgrid_utils--module.exports+_grid_substract_on) ⏏
    * [module.exports#grid_substract_on(grid, minuend, subtrahend, difference, no_negative)](#exp_module_Jqgrid_utils--module.exports+grid_substract_on) ⏏
    * [module.exports#_grid_ratio_on()](#exp_module_Jqgrid_utils--module.exports+_grid_ratio_on) ⏏
    * [module.exports#grid_ratio_on(grid, fraction_col, denominator_col, ratio_col)](#exp_module_Jqgrid_utils--module.exports+grid_ratio_on) ⏏
    * [module.exports#is_html(str)](#exp_module_Jqgrid_utils--module.exports+is_html) ⇒ <code>boolean</code> ⏏
    * [module.exports#_grid_sum_on()](#exp_module_Jqgrid_utils--module.exports+_grid_sum_on) ⏏
    * [module.exports#grid_sum_on(grid, fields)](#exp_module_Jqgrid_utils--module.exports+grid_sum_on) ⏏
    * [module.exports#_grid_avg_on()](#exp_module_Jqgrid_utils--module.exports+_grid_avg_on) ⏏
    * [module.exports#grid_avg_on(grid, fields)](#exp_module_Jqgrid_utils--module.exports+grid_avg_on) ⏏
    * [module.exports#_grid_percent_on()](#exp_module_Jqgrid_utils--module.exports+_grid_percent_on) ⏏
    * [module.exports#grid_percent_on(grid, obj)](#exp_module_Jqgrid_utils--module.exports+grid_percent_on) ⏏
    * [module.exports#update_row_to_api(_self, api, _ids, row)](#exp_module_Jqgrid_utils--module.exports+update_row_to_api) ⏏
    * [module.exports#delete_row_to_api(_self, api, rowid, _ids, data)](#exp_module_Jqgrid_utils--module.exports+delete_row_to_api) ⏏
    * [module.exports#append_seperator_link_column(col_model, url, field_value, base, attr, keys)](#exp_module_Jqgrid_utils--module.exports+append_seperator_link_column) ⏏
    * [module.exports#add_edit(col_model)](#exp_module_Jqgrid_utils--module.exports+add_edit) ⏏
    * [module.exports#add_textarea(col_model, edit_field)](#exp_module_Jqgrid_utils--module.exports+add_textarea) ⏏
    * [module.exports#get_col_model_from_data(obj, data, exclude, col_model)](#exp_module_Jqgrid_utils--module.exports+get_col_model_from_data) ⇒ <code>array</code> ⏏
    * [module.exports#binary_replace(cell_value, a, b)](#exp_module_Jqgrid_utils--module.exports+binary_replace) ⏏
    * [module.exports#_date112_to_DMY(cell_value, seperator)](#exp_module_Jqgrid_utils--module.exports+_date112_to_DMY) ⏏
    * [module.exports#date112_to_DMY(col_model, edit_field, seperator)](#exp_module_Jqgrid_utils--module.exports+date112_to_DMY) ⏏
    * [module.exports#add_formatter(col_model, edit_field, formatter)](#exp_module_Jqgrid_utils--module.exports+add_formatter) ⏏
    * [module.exports#natural_sort(col_model, column_name)](#exp_module_Jqgrid_utils--module.exports+natural_sort) ⇒ <code>array</code> ⏏
    * [module.exports#add_html_formatter(col_model, edit_field, html)](#exp_module_Jqgrid_utils--module.exports+add_html_formatter) ⇒ <code>array</code> ⏏
    * [module.exports#add_ok_button(col_model, fields)](#exp_module_Jqgrid_utils--module.exports+add_ok_button) ⇒ <code>array</code> ⏏
    * [module.exports#get_filled_cell_table_data(_grid, fields)](#exp_module_Jqgrid_utils--module.exports+get_filled_cell_table_data) ⇒ <code>array</code> ⏏
    * [module.exports#get_filled_cell_data(_grid, fields)](#exp_module_Jqgrid_utils--module.exports+get_filled_cell_data) ⇒ <code>object</code> ⏏
    * [module.exports#set_link(col_model, edit_field, url)](#exp_module_Jqgrid_utils--module.exports+set_link) ⇒ <code>object</code> ⏏
    * [module.exports#hide_all_columns_except(col_model, fields)](#exp_module_Jqgrid_utils--module.exports+hide_all_columns_except) ⇒ <code>object</code> ⏏
    * [module.exports#hide_column(col_model, field)](#exp_module_Jqgrid_utils--module.exports+hide_column) ⇒ <code>object</code> ⏏
    * [module.exports#s_grid_set_caption(_grid, data)](#exp_module_Jqgrid_utils--module.exports+s_grid_set_caption) ⏏
    * [module.exports#grid_set_caption(_grid, data)](#exp_module_Jqgrid_utils--module.exports+grid_set_caption) ⏏
    * [module.exports#s_resize_saved_cell_width(col_model, page, grid)](#exp_module_Jqgrid_utils--module.exports+s_resize_saved_cell_width) ⏏
    * [module.exports#resize_saved_cell_width(col_model, page, grid)](#exp_module_Jqgrid_utils--module.exports+resize_saved_cell_width) ⏏
    * [module.exports#resize_cell(the, column, not)](#exp_module_Jqgrid_utils--module.exports+resize_cell) ⏏
    * [module.exports#upsert_row(row, url, req)](#exp_module_Jqgrid_utils--module.exports+upsert_row) ⇒ <code>object</code> ⏏
    * [module.exports#insert_row(row, url)](#exp_module_Jqgrid_utils--module.exports+insert_row) ⇒ <code>object</code> ⏏
    * [module.exports#update_row(row, url, req)](#exp_module_Jqgrid_utils--module.exports+update_row) ⇒ <code>object</code> ⏏
    * [module.exports#delete_row(_id, url)](#exp_module_Jqgrid_utils--module.exports+delete_row) ⇒ <code>object</code> ⏏
    * [module.exports#adelete_api(url, json)](#exp_module_Jqgrid_utils--module.exports+adelete_api) ⇒ <code>object</code> ⏏
    * [module.exports#post_json(url, data)](#exp_module_Jqgrid_utils--module.exports+post_json) ⇒ <code>object</code> ⏏
    * [module.exports#put_json(url, data)](#exp_module_Jqgrid_utils--module.exports+put_json) ⇒ <code>object</code> ⏏
    * [module.exports#s_hide_del_icon()](#exp_module_Jqgrid_utils--module.exports+s_hide_del_icon) ⏏
    * [module.exports#hide_del_icon()](#exp_module_Jqgrid_utils--module.exports+hide_del_icon) ⏏
    * [module.exports#add_link_details_csv(col_model, url, edit_field, attr, keys, format, seperator)](#exp_module_Jqgrid_utils--module.exports+add_link_details_csv) ⏏
    * [module.exports#compare(obj, column1, column2, css_class)](#exp_module_Jqgrid_utils--module.exports+compare) ⏏
    * [module.exports#compare_smaller(obj, column1, column2, css_class)](#exp_module_Jqgrid_utils--module.exports+compare_smaller) ⏏
    * [module.exports#compare_bigger(obj, column1, column2, css_class)](#exp_module_Jqgrid_utils--module.exports+compare_bigger) ⏏
    * [module.exports#set_styles(obj, style_column)](#exp_module_Jqgrid_utils--module.exports+set_styles) ⏏
    * [module.exports#set_classes(grid_id)](#exp_module_Jqgrid_utils--module.exports+set_classes) ⏏
    * [module.exports#add_link_details(col_model, url, edit_field, attr, keys)](#exp_module_Jqgrid_utils--module.exports+add_link_details) ⏏
    * [module.exports#add_link_details_separator(col_model, url, edit_field, attr, keys)](#exp_module_Jqgrid_utils--module.exports+add_link_details_separator) ⏏
    * [module.exports#add_link_separator(col_model, url, edit_field, fields)](#exp_module_Jqgrid_utils--module.exports+add_link_separator) ⏏
    * [module.exports#_format_number_with_commas(number)](#exp_module_Jqgrid_utils--module.exports+_format_number_with_commas) ⏏
    * [module.exports#__cell_format(cell_value, format)](#exp_module_Jqgrid_utils--module.exports+__cell_format) ⏏
    * [module.exports#subgrid(_id, id, url, col_model, caption)](#exp_module_Jqgrid_utils--module.exports+subgrid) ⏏
    * [module.exports#add_image(col_model, edit_field, size, link)](#exp_module_Jqgrid_utils--module.exports+add_image) ⏏
    * [module.exports#set_filter(grid, data, fx, append_to)](#exp_module_Jqgrid_utils--module.exports+set_filter) ⏏
    * [module.exports#_filter()](#exp_module_Jqgrid_utils--module.exports+_filter) ⏏

<a name="exp_module_Jqgrid_utils--module.exports+format_currency_on_value"></a>

### module.exports#format\_currency\_on\_value(col_model, edit_field, currency) ⏏
Format a number into a currency  if have value, otherwise return empty

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| col_model | <code>object</code> |  | col_model of the grid |
| edit_field | <code>string</code> |  | name of column to be formatter |
| currency | <code>string</code> | <code>&quot;$&quot;</code> | currency symbol, default is $ |

**Example**  
```js
var jqu = new Jqgrid_utils();
let _data = await jqu.format_currency(this,'my_field','$');
console.log(_data);
```
<a name="exp_module_Jqgrid_utils--module.exports+format_currency"></a>

### module.exports#format\_currency(col_model, edit_field, currency) ⏏
Format a number into a currency

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| col_model | <code>object</code> |  | col_model of the grid |
| edit_field | <code>string</code> |  | name of column to be formatter |
| currency | <code>string</code> | <code>&quot;$&quot;</code> | currency symbol, default is $ |

**Example**  
```js
var jqu = new Jqgrid_utils();
let _data = await jqu.format_currency(this,'my_field','$');
console.log(_data);
```
<a name="exp_module_Jqgrid_utils--module.exports+add_checkbox"></a>

### module.exports#add\_checkbox(col_model, field_name) ⏏
Add a Checkbox to the Model

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>array</code> | grid col_model |
| field_name | <code>string</code> | column_name |

**Example**  
```js
var jqu = new Jqgrid_utils();
ol_model = await jqu.add_checkbox(col_model, "closed");
```
<a name="exp_module_Jqgrid_utils--module.exports+add_class"></a>

### module.exports#add\_class(col_model, field_name, class_name) ⏏
Add a Class to the Model

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>array</code> | grid col_model |
| field_name | <code>string</code> | column_name |
| class_name | <code>string</code> | class_name |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.add_class(col_model,field_name,class_name)
```
<a name="exp_module_Jqgrid_utils--module.exports+_grid_substract_on"></a>

### module.exports#\_grid\_substract\_on() ⏏
Syncron Alias grid_sum_on

**Kind**: Exported function  
<a name="exp_module_Jqgrid_utils--module.exports+grid_substract_on"></a>

### module.exports#grid\_substract\_on(grid, minuend, subtrahend, difference, no_negative) ⏏
Sum the columns values together

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| grid | <code>object</code> |  | Grid Object (required) |
| minuend | <code>array</code> |  | string array list of field_names used as minuend(number from which the other number is subtracted) |
| subtrahend | <code>array</code> |  | string array list of field_names used as subtrahend(number which is to be subtracted from the minuend) |
| difference | <code>string</code> |  | string field name for the difference(number which is to be subtracted from the minuend) |
| no_negative | <code>bolen</code> | <code>false</code> | true or 1 to not show negative numbers |

**Example**  
```js
var jqu = new Jqgrid_utils({page:page});
gridComplete: function () {
        jqu._jqu._grid_sum_on(this, [
          "qty_icollect",
          "qty_ordered",
          "need_for_qty_ordered",
          "wait_icollect",
        ]);
      },
```
<a name="exp_module_Jqgrid_utils--module.exports+_grid_ratio_on"></a>

### module.exports#\_grid\_ratio\_on() ⏏
Syncron Alias grid_ratio_on

**Kind**: Exported function  
<a name="exp_module_Jqgrid_utils--module.exports+grid_ratio_on"></a>

### module.exports#grid\_ratio\_on(grid, fraction_col, denominator_col, ratio_col) ⏏
Get the ratio the columns values together

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| grid | <code>object</code> | Grid Object (required) |
| fraction_col | <code>string</code> | Column/Field Name for value 1 |
| denominator_col | <code>string</code> | Column/Field Name for value 2 |
| ratio_col | <code>string</code> | Column/Field Name to the set the target ratio |

**Example**  
```js
var jqu = new Jqgrid_utils({page:page});
      gridComplete: function()
      {
       	jqu._grid_ratio_on(this, 'actual_days', 'plan_days', 'qc_eta_ratio');
      },
```
<a name="exp_module_Jqgrid_utils--module.exports+is_html"></a>

### module.exports#is\_html(str) ⇒ <code>boolean</code> ⏏
Check if the string is html

**Kind**: Exported function  
**Returns**: <code>boolean</code> - - true or false  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String of any kind |

<a name="exp_module_Jqgrid_utils--module.exports+_grid_sum_on"></a>

### module.exports#\_grid\_sum\_on() ⏏
Syncron Alias grid_sum_on

**Kind**: Exported function  
<a name="exp_module_Jqgrid_utils--module.exports+grid_sum_on"></a>

### module.exports#grid\_sum\_on(grid, fields) ⏏
Sum the columns values together

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| grid | <code>object</code> | Grid Object (required) |
| fields | <code>string</code> | Column/Field Name to sum |

**Example**  
```js
var jqu = new Jqgrid_utils({page:page});
gridComplete: function () {
        jqu._jqu._grid_sum_on(this, [
          "qty_icollect",
          "qty_ordered",
          "need_for_qty_ordered",
          "wait_icollect",
        ]);
      },
```
<a name="exp_module_Jqgrid_utils--module.exports+_grid_avg_on"></a>

### module.exports#\_grid\_avg\_on() ⏏
Syncron Alias grid_avg_on

**Kind**: Exported function  
<a name="exp_module_Jqgrid_utils--module.exports+grid_avg_on"></a>

### module.exports#grid\_avg\_on(grid, fields) ⏏
Average the column values together

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| grid | <code>object</code> | Grid Object (required) |
| fields | <code>array</code> | Column/Field Names to where the average of each column should be calculated |

**Example**  
```js
var jqu = new Jqgrid_utils({page:page});

   gridComplete: function()
      {
	jqu._grid_avg_on(this, ['diff_plan_to_actual', 'days_early', 'days_late']);
      },
```
<a name="exp_module_Jqgrid_utils--module.exports+_grid_percent_on"></a>

### module.exports#\_grid\_percent\_on() ⏏
Syncron Alias grid_percent_on

**Kind**: Exported function  
<a name="exp_module_Jqgrid_utils--module.exports+grid_percent_on"></a>

### module.exports#grid\_percent\_on(grid, obj) ⏏
Percent the columns values together

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| grid | <code>object</code> | Grid Object (required) |
| obj | <code>string</code> | Column/Field Name to sum |

**Example**  
```js
var jqu = new Jqgrid_utils({page:page});
gridComplete: function () {
        jqu._jqu._grid_sum_on(this, [
          "qty_icollect",
          "qty_ordered",
          "need_for_qty_ordered",
          "wait_icollect",
        ]);
      },
```
<a name="exp_module_Jqgrid_utils--module.exports+update_row_to_api"></a>

### module.exports#update\_row\_to\_api(_self, api, _ids, row) ⏏
Takes the updated columns data and send it to your API post server
loadComplete: async function() for the old record needs to be called, see example  !

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| _self | <code>object</code> | Grid Object (required) |
| api | <code>string</code> | API URL like https://foo.com (required) |
| _ids | <code>array</code> | id list, ids from the column header (required) |
| row | <code>object</code> | settings - extra key:value to send to your server |

**Example**  
```js
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
```
<a name="exp_module_Jqgrid_utils--module.exports+delete_row_to_api"></a>

### module.exports#delete\_row\_to\_api(_self, api, rowid, _ids, data) ⏏
After Delete a Grid Row send to and DELETE REST Request
You need to define loadComplete and afterDelRow
The Grid data needs to be saved as record within loadComplete

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| _self | <code>object</code> | Grid Object (required) |
| api | <code>string</code> | API URL like https://foo.com (required) |
| rowid | <code>string</code> | the row id value from afterDelRow (required) |
| _ids | <code>array</code> | id list, ids from the column header colmodel (required) |
| data | <code>object</code> | settings - extra key:value to send to your server |

**Example**  
```js
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
```
<a name="exp_module_Jqgrid_utils--module.exports+append_seperator_link_column"></a>

### module.exports#append\_seperator\_link\_column(col_model, url, field_value, base, attr, keys) ⏏
Append and sperator based link column to the end of a row

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>object</code> | col_model of the grid |
| url | <code>string</code> | URL string |
| field_value | <code>string</code> | field value - the visible text of the anchor |
| base | <code>object</code> | base row key value  - like {"name":'wiki','label':"Wiki"} |
| attr | <code>string</code> | URL Attributes |
| keys | <code>object</code> | keys and fields value to use |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.append_seperator_link_column(col_model, 'http://wiki.foo.com/index.php' ,'Wiki',{"name":'wiki','label':"Wiki","width":"65px","align":"center"} ,'target="_blank"',{"report_central":"name"});
```
<a name="exp_module_Jqgrid_utils--module.exports+add_edit"></a>

### module.exports#add\_edit(col_model) ⏏
add textarea

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>object</code> | edittype like |

**Example**  
```js
let col_model = JSON.parse(await aget_api(url + "/model"));
col_model = await jqu.add_edit(col_model, 'mon',{ edittype:'textarea', editoptions:{rows:6,cols:100} });
see for other inputfields: 
http://www.trirand.com/blog/phpjqgrid/doc/_2v80w6oam.htm
```
<a name="exp_module_Jqgrid_utils--module.exports+add_textarea"></a>

### module.exports#add\_textarea(col_model, edit_field) ⏏
add textarea

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>string</code> | edit_filed |
| edit_field | <code>string</code> | style of the textaread |

**Example**  
```js
let col_model = JSON.parse(await aget_api(url + "/model"));
col_model = await jqu.add_textarea(col_model, 'worker','style="width:100%;height:100px"');
```
<a name="exp_module_Jqgrid_utils--module.exports+get_col_model_from_data"></a>

### module.exports#get\_col\_model\_from\_data(obj, data, exclude, col_model) ⇒ <code>array</code> ⏏
Get basic colModel data from raw data

**Kind**: Exported function  
**Returns**: <code>array</code> - - col_model  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>array</code> | grid object |
| data | <code>array</code> | raw data object from loadComplete |
| exclude | <code>array</code> | list of columns to exclude (optional) |
| col_model | <code>array</code> | existing colModel (optional) |

**Example**  
```js
var jqu = new Jqgrid_utils();
,loadComplete: async function(data)
{
  let col_model = jQuery(this).jqGrid('getGridParam',"colModel");
  const new_col_model= await update_col_model(this, data, ['id','cust_qty','waiting_supplier_orders','waiting_assemblies','pending_components','pending_customer_order',col_model);
  jQuery(this).jqGrid('setGridParam',{colModel:new_col_model});
},
```
<a name="exp_module_Jqgrid_utils--module.exports+binary_replace"></a>

### module.exports#binary\_replace(cell_value, a, b) ⏏
Replace a Binaery 0 or 1 to other given value

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cell_value | <code>string</code> |  | cell value |
| a | <code>string</code> | <code>&quot;zero&quot;</code> | string replacement for 0 |
| b | <code>string</code> | <code>&quot;one&quot;</code> | string replacement for 1 |

**Example**  
```js
var jqu = new Jqgrid_utils();
let _data = jqu.binery_replace(0,'zero','one');
or for column formatter
download_formatter:"var jqu = new Jqgrid_utils();jqu.binary_replace({0},'zero','one')"});
```
<a name="exp_module_Jqgrid_utils--module.exports+_date112_to_DMY"></a>

### module.exports#\_date112\_to\_DMY(cell_value, seperator) ⏏
Convert a 112 date string to a DMY format with sepertaor - sync function

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cell_value | <code>string</code> |  | date string |
| seperator | <code>string</code> | <code>&quot;/&quot;</code> | seperator used |

**Example**  
```js
var jqu = new Jqgrid_utils();
let _data = jqu._date112_to_DMY('20220104','/');
console.log(_data);
```
<a name="exp_module_Jqgrid_utils--module.exports+date112_to_DMY"></a>

### module.exports#date112\_to\_DMY(col_model, edit_field, seperator) ⏏
Convert a 112 date to a DMY format with sepertaor

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| col_model | <code>object</code> |  | col_model of the grid |
| edit_field | <code>string</code> |  | name of the date 112 column what should get converted |
| seperator | <code>string</code> | <code>&quot;/&quot;</code> | seperator used |

**Example**  
```js
var jqu = new Jqgrid_utils();
let _data = await jqu.date112_to_DMY(this,'field','/');
console.log(_data);
```
<a name="exp_module_Jqgrid_utils--module.exports+add_formatter"></a>

### module.exports#add\_formatter(col_model, edit_field, formatter) ⏏
Add Formatter

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>array</code> | grid col_model |
| edit_field | <code>string</code> | string columns names what will be formatted |
| formatter | <code>object</code> | formatter object like { formatter: "select", formatoptions: {value: "1:ok;0:fail", defaultValue: "1" }} |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.add_formatter(col_model,'select',{ formatter: "select", formatoptions: {value: "1:ok;0:fail", defaultValue: "1" }})
```
<a name="exp_module_Jqgrid_utils--module.exports+natural_sort"></a>

### module.exports#natural\_sort(col_model, column_name) ⇒ <code>array</code> ⏏
Natural Sort Column

**Kind**: Exported function  
**Returns**: <code>array</code> - - col_model  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>array</code> | grid col_model |
| column_name | <code>string</code> | string columns names for natural sorting |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.natural_sort(col_model,'colunmename');
```
<a name="exp_module_Jqgrid_utils--module.exports+add_html_formatter"></a>

### module.exports#add\_html\_formatter(col_model, edit_field, html) ⇒ <code>array</code> ⏏
Add HTML Formatter

**Kind**: Exported function  
**Returns**: <code>array</code> - - col_model  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>array</code> | grid col_model |
| edit_field | <code>string</code> | string columns names what will be converted to ok buttons |
| html | <code>string</code> | html tag code |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.add_html_formatter(col_model,'process',"<button tabindex='0' class='cellbtn' type='button'>Process</button>");
```
<a name="exp_module_Jqgrid_utils--module.exports+add_ok_button"></a>

### module.exports#add\_ok\_button(col_model, fields) ⇒ <code>array</code> ⏏
Add an OK Button

**Kind**: Exported function  
**Returns**: <code>array</code> - - col_model  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>array</code> | grid col_model |
| fields | <code>array</code> | list of columns names what will be converted to ok buttons |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.add_ok_button(col_model, ['checked']);
```
<a name="exp_module_Jqgrid_utils--module.exports+get_filled_cell_table_data"></a>

### module.exports#get\_filled\_cell\_table\_data(_grid, fields) ⇒ <code>array</code> ⏏
Get the filled cell data

**Kind**: Exported function  
**Returns**: <code>array</code> - - table array  

| Param | Type | Description |
| --- | --- | --- |
| _grid | <code>object</code> | the grid object or its name |
| fields | <code>array</code> | list of columns names what will be collected |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.get_filled_cell_table_dat("#gridname","fieldname");
```
<a name="exp_module_Jqgrid_utils--module.exports+get_filled_cell_data"></a>

### module.exports#get\_filled\_cell\_data(_grid, fields) ⇒ <code>object</code> ⏏
Get the filled cell data

**Kind**: Exported function  
**Returns**: <code>object</code> - - json object of the colleted fields  

| Param | Type | Description |
| --- | --- | --- |
| _grid | <code>object</code> | the grid object or its name |
| fields | <code>array</code> | list of columns names what will be collected |

**Example**  
```js
var jqu = new Jqgrid_utils();
let _data = await jqu.get_filled_cell_data(this,["P-","bulk","wholesale"]);
```
<a name="exp_module_Jqgrid_utils--module.exports+set_link"></a>

### module.exports#set\_link(col_model, edit_field, url) ⇒ <code>object</code> ⏏
Add an URL from the data to a specific cell/column

**Kind**: Exported function  
**Returns**: <code>object</code> - https://foo.bar.com/av0_code/bar  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>object</code> | col_model of the grid |
| edit_field | <code>string</code> | name of the column what should get convert to the url |
| url | <code>string</code> | the used url of the data |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.set_link(col_model,'field_get_url','field_with_the_url','target="blank"');
console.log(_data);
```
<a name="exp_module_Jqgrid_utils--module.exports+hide_all_columns_except"></a>

### module.exports#hide\_all\_columns\_except(col_model, fields) ⇒ <code>object</code> ⏏
Hide all columns execpt column

**Kind**: Exported function  
**Returns**: <code>object</code> - col_model  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>object</code> | col_model of the grid |
| fields | <code>array</code> | array of names to not to  hide |

**Example**  
```js
col_model = await jqu.hide_all_columns_except(col_model,['supplier','customer']);
```
<a name="exp_module_Jqgrid_utils--module.exports+hide_column"></a>

### module.exports#hide\_column(col_model, field) ⇒ <code>object</code> ⏏
Hide a col_model column before load the grid

**Kind**: Exported function  
**Returns**: <code>object</code> - col_model  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>object</code> | col_model of the grid |
| field | <code>string</code> | name of the column to hide |

**Example**  
```js
col_model = await jqu.hide_column(col_model,'wholesale');
  col_model = await jqu.hide_column(col_model,'wholesale_formula');
```
<a name="exp_module_Jqgrid_utils--module.exports+s_grid_set_caption"></a>

### module.exports#s\_grid\_set\_caption(_grid, data) ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| _grid | <code>object</code> | gridobject; |
| data | <code>object</code> | grid data (optional); |

**Example**  
```js
var jqu = new Jqgrid_utils();
loadComplete: function(){
  jqu.grid_set_caption(this);
},
```
<a name="exp_module_Jqgrid_utils--module.exports+grid_set_caption"></a>

### module.exports#grid\_set\_caption(_grid, data) ⏏
Adding the row count number to the caption

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| _grid | <code>object</code> | gridobject; |
| data | <code>object</code> | grid data (optional); |

**Example**  
```js
var jqu = new Jqgrid_utils();
loadComplete: function(){
  await jqu.grid_set_caption(this);
},
```
<a name="exp_module_Jqgrid_utils--module.exports+s_resize_saved_cell_width"></a>

### module.exports#s\_resize\_saved\_cell\_width(col_model, page, grid) ⏏
**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| col_model | <code>object</code> |  | the col_model of the grid |
| page | <code>string</code> | <code>false</code> | the name of the page(optional) |
| grid | <code>object</code> | <code>false</code> | the grid objec(optional) |

**Example**  
```js
col_model = await jqu.resize_saved_cell_width(col_model);
```
<a name="exp_module_Jqgrid_utils--module.exports+resize_saved_cell_width"></a>

### module.exports#resize\_saved\_cell\_width(col_model, page, grid) ⏏
**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| col_model | <code>object</code> |  | the col_model of the grid |
| page | <code>string</code> | <code>false</code> | the name of the page(optional) |
| grid | <code>object</code> | <code>false</code> | the grid objec(optional) |

**Example**  
```js
col_model = await jqu.resize_saved_cell_width(col_model);
```
<a name="exp_module_Jqgrid_utils--module.exports+resize_cell"></a>

### module.exports#resize\_cell(the, column, not) ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>string</code> | width of the resized column |
| column | <code>string</code> | number what get resized |
| not | <code>string</code> | in use yet |

**Example**  
```js
var jqu = new Jqgrid_utils({page:'mypage'});
resizeStop: jqu.resize_cell,
```
<a name="exp_module_Jqgrid_utils--module.exports+upsert_row"></a>

### module.exports#upsert\_row(row, url, req) ⇒ <code>object</code> ⏏
Upsert(insert or update) from the grid to an API

**Kind**: Exported function  
**Returns**: <code>object</code> - {update: 'ok'} or {update: 'failed'}  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>object</code> | row object |
| url | <code>string</code> | url of the API |
| req | <code>string</code> | data oject |

**Example**  
```js
var jqu = new Jqgrid_utils();
afterSetRow: async function(row)
{
  let r = await jqu.upsert_row(row, 'http://api.com',{'key':'value'});
  console.log(r);
},
```
<a name="exp_module_Jqgrid_utils--module.exports+insert_row"></a>

### module.exports#insert\_row(row, url) ⇒ <code>object</code> ⏏
Insert from the grid to an API used by the upsert_row function

**Kind**: Exported function  
**Returns**: <code>object</code> - Object from the the API like {update: 'ok'} or {update: 'failed'}  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>object</code> | row object |
| url | <code>string</code> | URL of the API |

**Example**  
```js
var jqu = new Jqgrid_utils();
afterSetRow: async function(row)
{
  let r = await jqu.insert_row(row, 'http://api.com');
  console.log(r);
},
```
<a name="exp_module_Jqgrid_utils--module.exports+update_row"></a>

### module.exports#update\_row(row, url, req) ⇒ <code>object</code> ⏏
Update from the grid to an API used by the upsert_row function

**Kind**: Exported function  
**Returns**: <code>object</code> - Object from the the API like {update: 'ok'} or {update: 'failed'}  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>object</code> | row object |
| url | <code>string</code> | url of the API |
| req | <code>string</code> | data oject |

**Example**  
```js
var jqu = new Jqgrid_utils();
afterSetRow: async function(row)
{
  let r = await jqu.update_row(row, 'http://api.com',{'key':value});
  console.log(r);
},
```
<a name="exp_module_Jqgrid_utils--module.exports+delete_row"></a>

### module.exports#delete\_row(_id, url) ⇒ <code>object</code> ⏏
Delete from the grid to an API

**Kind**: Exported function  
**Returns**: <code>object</code> - @returns {object} Object from the the API like {delete: 'ok'} or {delete: 'failed'}  

| Param | Type | Description |
| --- | --- | --- |
| _id | <code>string</code> | row id |
| url | <code>string</code> | url of the API |

**Example**  
```js
var jqu = new Jqgrid_utils();
afterDelRow: async function(row)
{
  const r = await jqu.delete_row('id', 'http://api.com');
  console.log(r + ' : ' + row + ' - from API');
},
```
<a name="exp_module_Jqgrid_utils--module.exports+adelete_api"></a>

### module.exports#adelete\_api(url, json) ⇒ <code>object</code> ⏏
Async Delete request used by function delete_row

**Kind**: Exported function  
**Returns**: <code>object</code> - @returns {object} Object from the the API like {delete: 'ok'} or {delete: 'failed'}  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | url of the API |
| json | <code>boalan</code> | <code>false</code> | header should be json type? default form type |

**Example**  
```js
var jqu = new Jqgrid_utils();
afterDelRow: async function(row)
{
  ret = JSON.parse(await jqu.adelete_api(url));
},
```
<a name="exp_module_Jqgrid_utils--module.exports+post_json"></a>

### module.exports#post\_json(url, data) ⇒ <code>object</code> ⏏
Async Post request used by the update_row function

**Kind**: Exported function  
**Returns**: <code>object</code> - @returns {object} Object from the the API like {update: 'ok'} or {update: 'failed'}  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | url of the API |
| data | <code>object</code> | json object |

**Example**  
```js
var jqu = new Jqgrid_utils();
ret = JSON.parse(await jqu.post_json(url,{'key':value,'key2':'value'}));
```
<a name="exp_module_Jqgrid_utils--module.exports+put_json"></a>

### module.exports#put\_json(url, data) ⇒ <code>object</code> ⏏
Async Put request used by the insert_row function

**Kind**: Exported function  
**Returns**: <code>object</code> - @returns {object} Object from the the API like {insert: 'ok'} or {insert: 'failed'}  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | url of the API |
| data | <code>object</code> | json object |

**Example**  
```js
var jqu = new Jqgrid_utils();
ret = JSON.parse(await jqu.put_json(url,{'key':value,'key2':'value2'}));
```
<a name="exp_module_Jqgrid_utils--module.exports+s_hide_del_icon"></a>

### module.exports#s\_hide\_del\_icon() ⏏
Hide the del iconf rom the grid

**Kind**: Exported function  
**Example**  
```js
var jqu = new Jqgrid_utils();
jqu.hide_del_icon();
```
<a name="exp_module_Jqgrid_utils--module.exports+hide_del_icon"></a>

### module.exports#hide\_del\_icon() ⏏
Hide the del iconf rom the grid

**Kind**: Exported function  
**Example**  
```js
var jqu = new Jqgrid_utils();
await jqu.hide_del_icon();
```
<a name="exp_module_Jqgrid_utils--module.exports+add_link_details_csv"></a>

### module.exports#add\_link\_details\_csv(col_model, url, edit_field, attr, keys, format, seperator) ⏏
Convert a cell into a link/url with data from another cell and spit the value by comma - CSV

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| col_model | <code>object</code> |  | col_model of the grid |
| url | <code>string</code> |  | URL string |
| edit_field | <code>string</code> |  | Column/Cell to use |
| attr | <code>string</code> |  | URL Attributes |
| keys | <code>object</code> |  | keys and fields value to use |
| format | <code>object</code> |  | format info |
| seperator | <code>string</code> | <code>&quot;,&quot;</code> | seperator of the cell value to split (default is comma) |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.add_link_details_csv(col_model, host + '/html/report.html' , 'tags','target="_blank"',{"tags":"tags"},',');
```
<a name="exp_module_Jqgrid_utils--module.exports+compare"></a>

### module.exports#compare(obj, column1, column2, css_class) ⏏
Compare 2 columns and give them a style class  when they have different content
http://www.trirand.com/jqgridwiki/doku.php?id=wiki:methods

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | grid object |
| column1 | <code>string</code> | first column |
| column2 | <code>string</code> | second column |
| css_class | <code>string</code> | css class name |

**Example**  
```js
loadComplete: async function()
{
  await jqu.compare(this,'first_column','second_column','redlight');
  }
```
<a name="exp_module_Jqgrid_utils--module.exports+compare_smaller"></a>

### module.exports#compare\_smaller(obj, column1, column2, css_class) ⏏
Compare 2 columns for smaller and give them a style class
http://www.trirand.com/jqgridwiki/doku.php?id=wiki:methods

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | grid object |
| column1 | <code>string</code> | first column |
| column2 | <code>string</code> | second column |
| css_class | <code>string</code> | css class name |

**Example**  
```js
loadComplete: async function()
{
  await jqu.compare(this,'first_column','second_column','redlight');
  }
```
<a name="exp_module_Jqgrid_utils--module.exports+compare_bigger"></a>

### module.exports#compare\_bigger(obj, column1, column2, css_class) ⏏
Compare 2 columns for bigger and give them a style class
http://www.trirand.com/jqgridwiki/doku.php?id=wiki:methods

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | grid object |
| column1 | <code>string</code> | first column |
| column2 | <code>string</code> | second column |
| css_class | <code>string</code> | css class name |

**Example**  
```js
loadComplete: async function()
{
  await jqu.compare(this,'first_column','second_column','redlight');
  }
```
<a name="exp_module_Jqgrid_utils--module.exports+set_styles"></a>

### module.exports#set\_styles(obj, style_column) ⏏
Set styles to individual cells, what are defined in a dedicated column

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>object</code> |  | grid object |
| style_column | <code>string</code> | <code>&quot;styles&quot;</code> | name of the column what includes the style values what need to be in a strinify  json format |

**Example**  
```js
var jqu = new Jqgrid_utils();
       loadComplete: async function() {
        await jqu.set_styles(this);
        },
```
<a name="exp_module_Jqgrid_utils--module.exports+set_classes"></a>

### module.exports#set\_classes(grid_id) ⏏
Set a class to a row, what must be defined in a dedicated column called row.class
Once the grid is loaded, the functions  adds extra class to the row element

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| grid_id | <code>object</code> | grid id like #grid |

**Example**  
```js
var jqu = new Jqgrid_utils();
   loadComplete: async function() {
     await jqu.set_classes("#grid");
   },
```
<a name="exp_module_Jqgrid_utils--module.exports+add_link_details"></a>

### module.exports#add\_link\_details(col_model, url, edit_field, attr, keys) ⏏
Convert a cell into a link/url with data from another cell

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>object</code> | col_model of the grid |
| url | <code>string</code> | URL string |
| edit_field | <code>string</code> | Column/Cell to use |
| attr | <code>string</code> | URL Attributes |
| keys | <code>object</code> | keys and fields value to use |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.add_link_details(col_model,'http://foo.bar' , 'style','target="_blank"',{'key':'style'});
col_model = await jqu.add_link_details(col_model, host + '/html/table_size.html' , 'database','target="_blank"',{"database":"database","server":"server"});
```
<a name="exp_module_Jqgrid_utils--module.exports+add_link_details_separator"></a>

### module.exports#add\_link\_details\_separator(col_model, url, edit_field, attr, keys) ⏏
Convert a cell into seperated based link/url like https://foo.bar.com/field/value/field/value

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>object</code> | col_model of the grid |
| url | <code>string</code> | URL string |
| edit_field | <code>string</code> | Column/Cell to use |
| attr | <code>string</code> | URL Attributes |
| keys | <code>object</code> | keys and fields value to use |

**Example**  
```js
var jqu = new Jqgrid_utils();
col_model = await jqu.add_link_details_separator(col_model, url1 , 'style','target="_blank"',{"pricelist":"pricelist","style":"style"});                                         
col_model = await jqu.add_link_details_separator(col_model, 'https://foo.com' , 'target_column','target="_blank"',{"mykey":"myval"});
```
<a name="exp_module_Jqgrid_utils--module.exports+add_link_separator"></a>

### module.exports#add\_link\_separator(col_model, url, edit_field, fields) ⏏
Convert a cell into seperated based link/url include parameter based url like https://foo.bar.com/field.html?k=v

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| col_model | <code>object</code> | col_model of the grid |
| url | <code>string</code> | URL string |
| edit_field | <code>array</code> | array of dict |
| fields | <code>string</code> | URL Attributes |

**Example**  
```js
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
```
<a name="exp_module_Jqgrid_utils--module.exports+_format_number_with_commas"></a>

### module.exports#\_format\_number\_with\_commas(number) ⏏
Private Function

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>string</code> | number to add comma |

<a name="exp_module_Jqgrid_utils--module.exports+__cell_format"></a>

### module.exports#\_\_cell\_format(cell_value, format) ⏏
Private Function

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| cell_value | <code>object</code> | cell_value |
| format | <code>string</code> | format_ok or $ sign |

<a name="exp_module_Jqgrid_utils--module.exports+subgrid"></a>

### module.exports#subgrid(_id, id, url, col_model, caption) ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| _id | <code>string</code> | row_id |
| id | <code>string</code> | data id |
| url | <code>string</code> | url to request |
| col_model | <code>object</code> | col_model for the table |
| caption | <code>string</code> | Add to the caption of the subgrid |

**Example**  
```js
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
```
<a name="exp_module_Jqgrid_utils--module.exports+add_image"></a>

### module.exports#add\_image(col_model, edit_field, size, link) ⏏
**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| col_model | <code>object</code> |  | col_model for the grid |
| edit_field | <code>string</code> |  | field what include the image/picture href path like http://mypicture.png |
| size | <code>int</code> |  | size of the picture |
| link | <code>bolen</code> | <code>false</code> | image path should be a link |

**Example**  
```js
col_model = await jqu.add_image(col_model, image_field, 60, false);
```
<a name="exp_module_Jqgrid_utils--module.exports+set_filter"></a>

### module.exports#set\_filter(grid, data, fx, append_to) ⏏
Add a filter to the website beside the grid

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| grid | <code>object</code> |  | grid object or grid string name |
| data | <code>object</code> |  | the grid data object |
| fx | <code>object</code> |  | a dict with a array what should be filterd by the grid |
| append_to | <code>string</code> | <code>&quot;#filter&quot;</code> | id name of the DOM oject where the filter should be appened |

**Example**  
```js
var jqu = new Jqgrid_utils();
var run_me_once = true;
gridComplete: async function(){
        if(run_me_once)
        {
          await jqu.set_filter(this, data, {material:[],section:[]}, '#filter');
          run_me_once = false;
        }
      },
```
<a name="exp_module_Jqgrid_utils--module.exports+_filter"></a>

### module.exports#\_filter() ⏏
private function of set_filter

**Kind**: Exported function  
