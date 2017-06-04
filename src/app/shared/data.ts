export class Data {

    private data:string;

    public constructor(
        data?:string
    ) {
        this.data = data;
    }

    /**
     * Retorna a conversão da data recebida para Unix Timestamp.
     *
     * @param dataFormatoYMD
     * @returns {number}
     */
    private getTimestamp(dataFormatoYMD:string):number {
        let data = new Date(dataFormatoYMD).getTime();
        return Math.floor(data / 1000);
    }

    /**
     * Converte data para formatd yyyy/mm//dd.
     *
     * @param dataFormatoDMY
     * @returns {string}
     */
    private convertDataYMD(dataFormatoDMY:string):string {
        return dataFormatoDMY.slice(6,10) +'-'+dataFormatoDMY.slice(3,5) +'-'+dataFormatoDMY.slice(0,2);
    }

    /**
     * Retorna o regex completo de data, com validação de dia, mês e ano em suas quantidades máximas.
     *
     * @returns {RegExp}
     */
    public getRegexData() {
        return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    }

    /**
     * Recebe uma data e verifica se é maior que a data atual.
     *
     * @param data
     * @returns {boolean}
     */
    public dataFormMaiorDataAtual(data):boolean {
        let dataForm  = this.getTimestamp(this.convertDataYMD(data));
        let dataAtual = Math.round(new Date().getTime()/1000);
        return dataForm > dataAtual;
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
