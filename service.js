var Service = require('node-windows').Service;
var svc = new Service({
  name:'html2pdf',
  description: 'html to pdf export',
  script: 'C:\\node_projects\\html2pdf.it\\lib\\app.js'
});
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();