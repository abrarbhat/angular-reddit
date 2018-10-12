import { reportss } from './reportss.model';

// tslint:disable-next-line:class-name
export class tabbedReport extends reportss {
headers: Array<string>;

constructor(headers:  string[], values: string[]) {
    super(values);
    this.headers = headers;
}
run() {
    console.log(this.headers);
    super.run();
}

}
