import * as parser from "fast-xml-parser";
import _get from "lodash-es/get";

import reponseMock from "./cdiResponseMock";

const getCDIXMLBody = (code, initialDate, endDate) =>
  `<?xml version="1.0" encoding="UTF-8"?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" > <soapenv:Header> </soapenv:Header> <soapenv:Body> <m:getValoresSeriesXML xmlns:m="http://publico.ws.casosdeuso.sgs.pec.bcb.gov.br"> <in0 xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="xsd:long[1]"> <item xsi:type="xsd:long">12</item> </in0> <in1>27/07/2017</in1> <in2>27/07/2018</in2> </m:getValoresSeriesXML> </soapenv:Body> </soapenv:Envelope>`;

export function getCDI() {
  // return fetch(
  //   "https://cors-anywhere.herokuapp.com/https://www3.bcb.gov.br/wssgs/services/FachadaWSSGS",
  //   {
  //     method: "POST",
  //     body: getCDIXMLBody(12, "27/07/2017", "27/07/2018"),
  //     headers: {
  //       "Content-Type": "application/xml; charset=utf-8",
  //       soapaction: "",
  //       Origin: "null"
  //     }
  //   }
  // )
  //   .then(response => response.text())
  return Promise.resolve(reponseMock).then(data => {
    if (parser.validate(data) === true) {
      const jsonObj = parser.parse(data);
      let cdiData: string = _get(
        jsonObj,
        "soapenv:Envelope.soapenv:Body.ns1:getValoresSeriesXMLResponse.getValoresSeriesXMLReturn"
      );
      const cleanData = cdiData.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      cdiData = parser.parse(cleanData);

      const itens = _get(cdiData, "SERIES.SERIE.ITEM", []).map(
        item => 1 + item["VALOR"] / 100
      );

      const anualRate = itens.reduce(
        (acc: number, item: number) => acc * item,
        1
      );

      return jsonObj;
    }
  });
}
