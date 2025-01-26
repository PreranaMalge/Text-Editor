This project is a simple yet feature-rich text editor built using React, featuring a WYSIWYG editor, a live preview mode, and text styling functionality through tooltips. It also includes responsive design for mobile, tablet, and desktop views.

## Features

- **ReactQuill Integration**: A rich text editor with formatting options such as headers, fonts, lists, links, and media embedding.
- **Custom Tooltip**: Apply text styling (e.g., underline) to selected text using a custom tooltip.
- **Preview Modes**: Toggle between mobile, tablet, and desktop preview modes to visualize how content will appear across devices.
- **Add Headline**: Quickly insert new headlines with a single click.
- **Responsive Design**: The layout adapts to different screen sizes for seamless usability on all devices.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser at `http://localhost:3000`.

## Usage

1. **Editing Content**:
   - Use the text editor to input or format content.
   - Highlight text to activate the tooltip and apply styles such as underline.

2. **Adding Headlines**:
   - Click the "+" button to insert a new headline (`<h1>` tag).

3. **Previewing Content**:
   - Use the preview mode buttons (Mobile, Tablet, Desktop) to see how the content appears on different devices.

## Folder Structure

```
project-folder/
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # Styling for the application
│   ├── index.js        # Application entry point
│   ├── components/     # (Optional) Additional components
├── public/
│   ├── index.html      # Base HTML file
├── package.json        # Project configuration and dependencies
├── README.md           # Project documentation
```

## Dependencies

- **React**: Frontend library for building user interfaces.
- **ReactQuill**: WYSIWYG editor for rich text editing.
- **React Icons**: Icon library for adding icons to the application.

## Customization

- **Editor Toolbar**: Modify the `modules.toolbar` array in `App.js` to customize the toolbar options available in the editor.
- **Styling**: Adjust styles in `App.css` to fit your design preferences.
- **Tooltip Behavior**: Modify the `applyUnderline` or other tooltip-related functions in `App.js` to add more text styling options.

## Screenshots



## Responsive Design

- **Mobile**: Compact layout with optimized font sizes.
- **Tablet**: Split view with balanced editor and preview areas.
- **Desktop**: Side-by-side layout for the editor and preview.


