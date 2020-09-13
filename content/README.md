Content can be pure javascript only or with UI.

If javascript only, copy boilerplate from /background.
If with UI, copy boilerplate from /popup.

Then add this code in the manifest and all the files that will be used in the page.

```
"content_scripts": [
    {
      "matches": ["https://wwww.google.com/*"],
      "all_frames": true,
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ],
```
