import * as domain from 'domain';
export class Article {
title: string;
link: string;
votes: number;

constructor(ti: string, link: string , votes?: number) {
    this.title = ti;
    this.link = link;
    this.votes = votes || 5;
}
voteUp(): void {
    this.votes += 1;
}

voteDown(): void {
    this.votes += 1;
}


domain(): string {

try {
    
const domainAndPath: string = this.link.split('//')[1];
return domainAndPath.split['/'][0];

} catch (err) {
    return null;
    
}

}


}
