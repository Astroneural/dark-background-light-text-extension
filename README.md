# Transparent Backgrounds & Readable Text Extension

A browser extension that creates clean, readable web pages by making backgrounds transparent while preserving text visibility and essential UI icons.

## ✨ Features

- **Transparent Backgrounds**: Removes distracting website backgrounds for a clean reading experience
- **Readable Text**: Ensures all text remains clearly visible with proper contrast
- **UI Icon Preservation**: Keeps navigation icons, buttons, and interface elements visible
- **Gmail Optimized**: Special handling for Gmail's interface to maintain usability
- **Customizable**: Configurable foreground and background colors
- **Performance Focused**: Built with modern tools for fast, efficient operation

## 🚀 Installation

### From Source
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/transparent-backgrounds-extension
   cd transparent-backgrounds-extension
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build
   ```

4. Load the extension in your browser:
   - **Firefox**: Go to `about:debugging` → This Firefox → Load Temporary Add-on → Select `manifest.json`
   - **Chrome**: Go to `chrome://extensions/` → Enable Developer mode → Load unpacked → Select the project folder

## 🛠️ Development

### Scripts
- `npm run build` - Build the extension for development
- `npm run build:prod` - Build optimized version for production
- `npm run test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean build artifacts

### Project Structure
```
src/
├── background/          # Background script
├── browser-action/      # Popup interface
├── common/             # Shared utilities
├── content/            # Content script
├── methods/            # Style processing methods
├── preferences/        # Settings UI (Svelte)
└── types/              # TypeScript definitions
```

## ⚙️ Configuration

Access the preferences via:
- Browser action popup (for current tab)
- Extension options page (for global settings)

### Available Options
- **Method**: Choose between different processing approaches
- **Foreground Color**: Text color (default: white)
- **Background Color**: Background color (default: transparent)

## 🎯 Keyboard Shortcuts

- **F2**: Toggle extension globally
- **Ctrl+Alt+D**: Toggle for current tab only

## 🌐 Website Compatibility

The extension works on all websites with special optimizations for:
- **Gmail**: Preserves toolbar icons and navigation while maintaining readability
- **General websites**: Maintains form controls and interactive elements

## 🔧 Technical Details

### Built With
- **TypeScript 5.x**: Modern type-safe JavaScript
- **Rollup 4.x**: Fast, efficient bundling
- **Svelte 5.x**: Reactive UI components
- **Modern CSS**: Advanced selectors and filters

### Browser Support
- Firefox 60+
- Chrome 60+
- Other Chromium-based browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Performance

- **Fast startup**: Optimized content script injection
- **Minimal memory usage**: Efficient CSS processing
- **No layout shifts**: Non-blocking style application

## 🐛 Known Issues

- Some websites with complex CSS might require manual adjustment
- Dark mode websites may need different color configurations

## 📞 Support

If you encounter any issues:
1. Check the [Issues](https://github.com/your-username/transparent-backgrounds-extension/issues) page
2. Create a new issue with detailed description
3. Include website URL and browser version

## 🏗️ Development Status

Current version: **1.0.0**

- ✅ Core functionality complete
- ✅ Gmail optimization complete
- ✅ Performance optimization complete
- ✅ Production-ready build system
- 🔄 Additional website-specific optimizations (ongoing)

---

**Made with ❤️ for a cleaner web experience**
