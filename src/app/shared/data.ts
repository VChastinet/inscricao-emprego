export class Data {

    private data:string;

    public constructor(
        data?:string
    ) {
        this.data = data;
    }

    public getDataFormatoBR() {

        let data = this.data.split("T")[0];
        let datePart = data.match(/\d+/g),
            year    = datePart[0],
            month   = datePart[1],
            day     = datePart[2];

        return day+'/'+month+'/'+year;
    }

    public getData():string {
        return this.data;
    }
}
