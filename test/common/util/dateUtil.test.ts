import { getYYYYMMddHHmm }  from "../../../src/common/util/dateUtil"

describe ("DateUtil tests", () => {

    it('Should append leading zero for single digit date and month', async () => {
        var dt = new Date('2022-3-8 7:09:50')
        expect(getYYYYMMddHHmm(dt)).toEqual('202203080709')

    }) 

    it('Should not append leading zero for single digit date and month', async () => {
        var dt = new Date('2022-10-11 12:00:50')
        expect(getYYYYMMddHHmm(dt)).toEqual('202210111200')

    }) 
})