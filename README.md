# 🔗 Leads Tracker — Chrome Extension

A lightweight Chrome extension that lets you save, manage, and revisit URLs while browsing. Save the current tab with a single click, or type in any URL manually. All leads persist across browser sessions using `localStorage`.

---

##  Features

- **Save Current Tab** — Capture the active tab's URL instantly with one click
- **Manual Input** — Type and save any URL directly from the popup
- **Persistent Storage** — Leads are stored in `localStorage` and survive browser restarts
- **Clickable Links** — Saved leads render as clickable anchor tags that open in a new tab
- **Delete All** — Clear your entire leads list with a single button

---

## Built With

| Technology | Purpose |
|---|---|
| HTML5 | Extension popup structure |
| CSS3 | Popup styling and layout |
| JavaScript (ES6+) | Extension logic and Chrome APIs |
| Chrome Extensions API | Tab access and manifest configuration |
| localStorage | Client-side data persistence |

---

## 📁 Project Structure

```
leads_tracker_chrome_extension/
├── manifest.json       # Extension config, permissions & metadata
├── index.html          # Popup UI markup
├── index.js            # Core JavaScript logic
├── styles.css          # Popup styles
└── icon.png            # Extension icon
```

---

## Installation (Load Unpacked)

Since this extension is not published on the Chrome Web Store, you can load it manually in developer mode.

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/justinmwathi/leads_tracker_chrome_extension.git
   ```

2. Open Chrome and navigate to:
   ```
   chrome://extensions
   ```

3. Toggle on **Developer mode** (top-right corner).

4. Click **Load unpacked** and select the cloned project folder.

5. The Leads Tracker icon will appear in your Chrome toolbar. Pin it for easy access.

---

## How to Use

1. Click the **Leads Tracker** icon in your Chrome toolbar to open the popup.
2. To save the page you're currently on, click **Save Tab**.
3. To save a custom URL, type it into the input field and click **Save Input**.
4. Saved leads appear as a clickable list — click any link to open it in a new tab.
5. To clear all saved leads, double-click the **Delete All** button.

---

## Permissions

The extension requests the following permissions in `manifest.json`:

| Permission | Reason |
|---|---|
| `tabs` | Read the URL of the currently active tab |
| `storage` | (via localStorage) Persist leads across sessions |

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## Author

**Kimani Justin Mwathi**
- GitHub: [@justinmwathi](https://github.com/justinmwathi)
- LinkedIn: [linkedin.com/in/justin-mwathi](https://linkedin.com/in/justin-mwathi)
- Email: justinmwathi32@gmail.com

---

## License

This project is open source and available under the [MIT License](LICENSE).