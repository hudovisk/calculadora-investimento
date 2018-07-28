import * as parser from "fast-xml-parser";
import _get from "lodash-es/get";

import reponseMock from "@src/features/core/cdiResponseMock";

const getCDIXMLBody = (code, initialDate, endDate) =>
  `<?xml version="1.0" encoding="UTF-8"?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" > <soapenv:Header> </soapenv:Header> <soapenv:Body> <m:getValoresSeriesXML xmlns:m="http://publico.ws.casosdeuso.sgs.pec.bcb.gov.br"> <in0 xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="xsd:long[1]"> <item xsi:type="xsd:long">${code}</item> </in0> <in1>${initialDate}</in1> <in2>${endDate}</in2> </m:getValoresSeriesXML> </soapenv:Body> </soapenv:Envelope>`;

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const BACEN_URL = "https://www3.bcb.gov.br/wssgs/services/FachadaWSSGS";

export function getCDI(): Promise<number[]> {
  // return fetch(
  //   CORS_PROXY + BACEN_URL,
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
  return Promise.resolve(reponseMock)
    .then(extractXMLReturn)
    .then(parseXMLReturn);
}

function extractXMLReturn(response: string): string {
  if (!parser.validate(response) === true) {
    throw new Error("Invalid SOAP Response");
  }

  const jsonObj = parser.parse(response);
  return _get(
    jsonObj,
    "soapenv:Envelope.soapenv:Body.ns1:getValoresSeriesXMLResponse.getValoresSeriesXMLReturn",
    ""
  );
}

function parseXMLReturn(data: string): number[] {
  const xmlData = data.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  if (!parser.validate(data) === true) {
    throw new Error("Invalid XML return");
  }
  const xmlObj = parser.parse(xmlData);

  const itens = _get(xmlObj, "SERIES.SERIE.ITEM", []).map(
    item => item["VALOR"]
  );

  return itens;
}
