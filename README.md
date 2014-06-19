input-sanitizer
===============

Quick node module for sanitizing strings within objects.
Uses https://github.com/theSmaw/Caja-HTML-Sanitizer for sanitization.


Installation
===============

```
npm install git://github.com/3upzorz/input-sanitizer.git
```

Usage
===============
sanitizeInput(input)
Sanitizes string inputs by getting rid harmful javascript to prevent XSS. Also turns '<', '>' symbols to '\&lt;' and '\&gt;'
```
var sanitizeInput = require('input-sanitizer').sanitizeInput;
var input = {
  firstName:'<script src="malicious.js"></script>',
  lastName:'<h1>Doe</h1>',
  
};
var sanitizedInput = sanitizeInput(input);
```

sanitizedInput will contain:

```
{
  firstName:'',
  lastName:'&lt;h1&gt;Doe&lt;/h1&gt;'
}
