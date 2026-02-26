# ![email_gateway](pages/public/img/logo.png) jqgrid_utils

**Convenient Utility Functions for Free jqGrid**

`jqgrid_utils` is a JavaScript library designed to simplify common tasks and enhance the functionality of free jqGrid, a powerful jQuery grid plugin.  It provides a collection of utility functions that can help you streamline your jqGrid implementations, reduce boilerplate code, and improve the overall user experience.

## Features

*   **Simplified jqGrid Initialization:**  Provides helper functions to easily configure and initialize jqGrid instances with common settings.
*   **Data Formatting Utilities:**  Offers functions for formatting data displayed in the grid, such as dates, numbers, and currencies.
*   **CRUD Operation Helpers:**  Simplifies the implementation of Create, Read, Update, and Delete (CRUD) operations with jqGrid, including handling form submissions and server-side communication.
*   **Custom Cell Formatting:**  Provides tools for creating custom cell formatters to display data in a visually appealing and informative way.
*   **Event Handling Shortcuts:**  Offers convenient methods for attaching event handlers to jqGrid events, such as row selections, cell edits, and grid loading.
*   **Accessibility Enhancements:**  Includes features to improve the accessibility of jqGrid for users with disabilities.

## Installation

```bash
npm install jqgrid_utils
```

## Usage

1.  **Include the Library:**

    Add the following `<script>` tag to your HTML file, ensuring it's placed *after* jQuery and free jqGrid are included:

    ```html
    <script src="../node_modules/jqgrid_utils/dist/jqgrid_utils.js"></script>
    ```

2.  **Instantiate the `Jqgrid_utils` Class:**

    Create an instance of the `Jqgrid_utils` class in your JavaScript code:

    ```javascript
    let jqu = new Jqgrid_utils();
    ```

3.  **Use the Utility Functions:**

    Call the various methods of the `jqu` object to perform tasks related to jqGrid.  See the examples below and the API documentation for details on available functions.

## Examples

Here are a few examples of how to use `jqgrid_utils`:

*   **Basic jqGrid Initialization:**

    ```javascript
    let jqu = new Jqgrid_utils();

    $(document).ready(function () {
      $("#grid").jqGrid({
        //  Use jqu.getDefaultGridOptions() to get a base set of options
        ...jqu.getDefaultGridOptions({
          url: '/data',
          colModel: [
            { name: 'id', label: 'ID', width: 50 },
            { name: 'name', label: 'Name', width: 150 },
            { name: 'email', label: 'Email', width: 200 }
          ],
          caption: "My Grid"
        }),
        loadComplete: function() {
          // Example of using a utility function after the grid loads
          jqu.highlightRows("#grid");
        }
      });
    });
    ```

*   **Highlighting Rows:** (Assuming you have a `highlightRows` function)

    ```javascript
    jqu.highlightRows("#grid"); // Highlights rows in the grid with ID "grid"
    ```

*   **Formatting Dates:** (Assuming you have a `formatDate` function)

    ```javascript
    let formattedDate = jqu.formatDate("2023-10-27", "MM/DD/YYYY"); // Formats the date
    console.log(formattedDate); // Output: 10/27/2023
    ```

## API Documentation

For detailed information on all available functions and options, please refer to the API documentation:

[https://github.com/myridia/jqgrid_utils/blob/main/README.md](https://github.com/myridia/jqgrid_utils/blob/main/README.md)

(This README *is* the API documentation for now.  Consider generating proper documentation with JSDoc or similar if the library grows.)

## Source Code

The source code for `jqgrid_utils` is available on GitHub:

[https://github.com/myridia/jqgrid_utils/actions](https://github.com/myridia/jqgrid_utils/actions)

## Contributing

We welcome contributions to `jqgrid_utils`!  If you have a bug fix, a new feature, or an improvement to suggest, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your changes.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Submit a pull request to the `main` branch.

Please ensure that your code adheres to the existing coding style and includes appropriate unit tests.

## License

This project is licensed under the [GNU GENERAL PUBLIC LICENSE](LICENSE) - see the [LICENSE](LICENSE) file for details.  (You'll need to create a `LICENSE` file in your repository.)

## Future Enhancements

*   **More comprehensive data formatting options.**
*   **Built-in support for common jqGrid plugins.**
*   **Improved error handling and logging.**
*   **More detailed documentation and examples.**
*   **TypeScript definitions.**

## Support

If you encounter any issues or have questions about `jqgrid_utils`, please open an issue on GitHub.

<a name="module_Jqgrid_utils"></a>

## Jqgrid\_utils

A module for Jqgrid_utils




