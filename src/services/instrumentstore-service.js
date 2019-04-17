export default class InstrumentService {

    _apiBase = 'https://instrument/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllInstrument = async () => {
        const res = await this.getResource(`/instrument/`);
        return res.results
            .map(this._transformInstrument)
            .slice(0, 5);
    };

    getInstrument= async (id) => {
        const instrument = await this.getResource(`/instrument/${id}/`);
        return this._transformInstrument(instrument);
    };

    _transformInstrument = (instrument) => {
        return {
            id: instrument.id,
            title: instrument.title,
            category: instrument.category_item,
            instrument: instrument.tools_instrument
        }
    }
}
