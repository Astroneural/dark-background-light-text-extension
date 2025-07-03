# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-07-02

### Added
- Complete transformation to "Transparent Backgrounds & Readable Text" focus
- Comprehensive Gmail interface optimization
- Modern build system with latest packages
- Production-ready development workflow
- Organized CSS with clear commenting
- Enhanced manifest with better metadata

### Changed
- **BREAKING**: Removed all color processing except background and text
- Rebranded extension name and description
- Updated all UI text and preferences to reflect new focus
- Simplified user interface to foreground/background color only
- Modernized TypeScript configuration
- Updated all dependencies to latest versions

### Removed
- Link color processing and preferences
- Visited link color processing and preferences  
- Active link color processing and preferences
- Selection color processing and preferences
- All complex color scheme options

### Fixed
- Gmail sidebar icons now display correctly in both selected/unselected states
- Gmail toolbar icons are properly visible
- Content images and profile pictures are preserved
- CSS validation errors resolved
- Build warnings addressed

### Technical
- Upgraded to TypeScript 5.x with modern configurations
- Updated to Rollup 4.x for improved bundling
- Migrated to Svelte 5.x for UI components
- Enhanced development scripts and tooling
- Comprehensive test coverage maintained
- Performance optimizations throughout

### Gmail Specific
- White icons for sidebar navigation (inbox, starred, sent, etc.)
- White icons for top toolbar (archive, delete, mark as read, etc.)
- Preserved content images and profile pictures
- Maintained all interactive elements
- Optimized for both selected and unselected states

---

## Previous Versions

This extension was previously known as "Dark Background and Light Text" and provided comprehensive color theming. Version 1.0.0 represents a complete rewrite focused specifically on transparent backgrounds and readable text.
