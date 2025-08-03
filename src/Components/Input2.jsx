import React from "react";

function Input(props) {
  const handleChange = (e) => {
    props.onCurrencyChange2(e.target.value);
  };

  const currenciescode= [
    "aed", "afn", "all", "amd", "ang", "aoa", "ars", "aud", "azn", "bam", "bbd",
    "bdt", "bgn", "bhd", "bif", "bmd", "bnd", "bob", "brl", "bsd", "btn", "bwp",
    "byn", "bzd", "cad", "cdf", "chf", "clp", "cny", "cop", "crc", "cup", "cve",
    "czk", "djf", "dkk", "dop", "dzd", "egp", "ern", "etb", "eur", "fjd", "fkp",
    "gbp", "gel", "ghs", "gip", "gmd", "gnf", "gtq", "gyd", "hkd", "hnl", "hrk",
    "htg", "huf", "idr", "ils", "inr", "iqd", "irr", "isk", "jmd", "jod", "jpy",
    "kes", "kgs", "khr", "kmf", "kpw", "krw", "kwd", "kyd", "kzt", "lak", "lbp",
    "lkr", "lrd", "lsl", "lyd", "mad", "mdl", "mga", "mkd", "mmk", "mnt", "mop",
    "mru", "mur", "mvr", "mwk", "mxn", "myr", "mzn", "nad", "ngn", "nio", "nok",
    "npr", "nzd", "omr", "pab", "pen", "pgk", "php", "pkr", "pln", "pyg", "qar",
    "ron", "rsd", "rub", "rwf", "sar", "sbd", "scr", "sdg", "sek", "sgd", "shp",
    "sll", "sos", "srd", "ssp", "stn", "svc", "syp", "szl", "thb", "tjs", "tmt",
    "tnd", "top", "try", "ttd", "twd", "tzs", "uah", "ugx", "usd", "uyu", "uzs",
    "ves", "vnd", "vuv", "wst", "xaf", "xcd", "xof", "xpf", "yer", "zar", "zmw"
  ];

  return (
     <select
        onChange={handleChange}
        className="border-2 bg-zinc-800  h-12 w-36 rounded-xl border-none ml-2 text-white"
      >
       {currenciescode.map((currcode)=>{
       return <option key={currcode} value={currcode}>{currcode}</option>
       })}
      </select>
  );
}

export default Input;
