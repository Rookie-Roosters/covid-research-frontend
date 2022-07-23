import { CovidInfo } from "./covid-info.model"
import { Statistics } from "./statistics.model"

export class StatsByCountry {
    isoCode: string
    covidInfo: CovidInfo
    statistics: Statistics

    constructor () {
        this.isoCode = '',
        this.covidInfo = new CovidInfo(),
        this.statistics = new Statistics()
    }
}