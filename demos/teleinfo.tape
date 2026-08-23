Output assets/teleinfo-demo.gif

Set FontSize 16
Set Width 960
Set Height 420
Set Shell bash
Set MarginColor "#0d1117"
Set Theme {
  "name": "teleinfo",
  "black": "#0d1117",
  "red": "#f85149",
  "green": "#3fb950",
  "yellow": "#e3b341",
  "blue": "#58a6ff",
  "magenta": "#a371f7",
  "cyan": "#39c5cf",
  "white": "#e6edf3",
  "brightBlack": "#8b949e"
}

Type "docker pull ghcr.io/bartoszosiej/teleinformatyka-wikipedia"
Enter
Sleep 1s
Type "v1.0.0: Pulling from bartoszosiej/teleinformatyka-wikipedia"
Enter
Type "Digest: sha256:abc123..."
Enter
Type "Status: Downloaded newer image"
Enter
Sleep 500ms

Type "docker run -p 3000:3000 teleinformatyka-wikipedia"
Enter
Sleep 1s
Type "   ✓ Docusaurus v3.10 server started"
Enter
Type "   ✓ i18n: PL + EN"
Enter
Type "   ✓ http://localhost:3000"
Enter
Sleep 500ms

Type "# Telecom encyclopedia · PL + EN"
Enter
Sleep 400ms
Type "# Docusaurus · networking · 5G · fiber · security"
Enter
Sleep 800ms
