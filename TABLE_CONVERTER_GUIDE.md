# Table Converter for KoalaWriter to Sanity

This script helps you convert markdown tables from KoalaWriter into Sanity Studio format.

## How to Use:

### Method 1: Manual Entry in Sanity Studio

1. **Open Sanity Studio** (http://localhost:3333)
2. **Create/Edit a blog post**
3. In the body content, click **"+ Comparison Table"**
4. **Add rows:**
   - First row: Check "Header Row" and add your column headers
   - Subsequent rows: Add your data cells
5. For each row, click "Add item" to add cells

### Method 2: Convert Markdown Table

If you have a markdown table from KoalaWriter like this:

```
| Feature | Product A | Product B |
|---------|-----------|-----------|
| Price   | $99       | $149      |
| Speed   | Fast      | Very Fast |
```

**Steps:**

1. Copy your markdown table
2. Use this conversion tool (paste below and run in browser console):

```javascript
function convertMarkdownTableToSanity(markdownTable) {
  const lines = markdownTable.trim().split('\n');
  const rows = [];
  
  lines.forEach((line, index) => {
    // Skip separator lines (containing only |, -, and spaces)
    if (line.match(/^\|?[\s\-|]+\|?$/)) return;
    
    // Split by | and clean up
    const cells = line
      .split('|')
      .map(cell => cell.trim())
      .filter(cell => cell !== '');
    
    if (cells.length > 0) {
      rows.push({
        cells: cells,
        isHeader: index === 0 // First non-separator row is header
      });
    }
  });
  
  return {
    _type: 'table',
    rows: rows
  };
}

// Usage:
const markdown = `
| Feature | Product A | Product B |
|---------|-----------|-----------|
| Price   | $99       | $149      |
| Speed   | Fast      | Very Fast |
`;

console.log(JSON.stringify(convertMarkdownTableToSanity(markdown), null, 2));
```

3. Copy the JSON output
4. In Sanity Studio, you can manually recreate the table structure

## Tips:

- **First row = Header**: Always check "Header Row" for column headers
- **Styling**: Tables are automatically styled with alternating row colors
- **Responsive**: Tables scroll horizontally on mobile
- **Caption**: Add an optional caption to describe your table

## Example Table Structure in Sanity:

**Caption**: "Product Comparison"

**Row 1** (Header Row ✓):
- Cells: ["Feature", "Product A", "Product B"]

**Row 2**:
- Cells: ["Price", "$99", "$149"]

**Row 3**:
- Cells: ["Speed", "Fast", "Very Fast"]
