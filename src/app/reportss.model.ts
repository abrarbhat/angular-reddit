// tslint:disable-next-line:class-name
export class reportss {
     data: Array<string>;
    
constructor(data: Array<string>) {
     this.data = data;
     }
    
     run() {
     this.data.forEach(function(line) { console.log(line); });
     }
 // tslint:disable-next-line:eofline
 }