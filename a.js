const bcrypt = require("bcrypt");

// bcrypt.hash('gerbgverbebtrb43432n4r43',8)
// .then(encrypted => console.log(encrypted));

bcrypt.compare('gerbgverbebtrb43432n4r43','$2a$08$d3JgjYtK/4h25v2MujrZ1eztMWfJ7Y9EgWXeEZJ8cbNHefpusM.k6')
.then(same => console.log(same));