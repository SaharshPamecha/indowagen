// Custom build script for AWS Amplify deployment
const fs = require('fs');
const path = require('path');

console.log('Running Amplify build script...');

// Ensure the public directory exists
if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'));
}

// Create a simple _redirects file for SPA routing
fs.writeFileSync(
  path.join(__dirname, 'public', '_redirects'),
  '/* /index.html 200'
);

// Create a simple web.config for IIS servers
const webConfig = `<?xml version="1.0"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>`;

fs.writeFileSync(path.join(__dirname, 'public', 'web.config'), webConfig);

console.log('Amplify build script completed successfully!');
