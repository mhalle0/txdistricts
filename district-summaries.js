class DistrictSummary {
  constructor(id, rep, party, winPercent) {
    this.id = id;
    this.rep = rep;
    this.party = party;
    this.win = winPercent;
  }

  id() {
    return this.id;
  }

  rep() {
    return this.rep;
  }

  party() {
    if(this.party == "d") return "Democrat";
    else if (this.party == "r") return "Republican";
    else return "error";
  }

  shade() {
    if(this.party == ("r")) {
      if(this.win > 90) return "#E00000";
      else if(this.win > 80) return "#FF1F1F";
      else if(this.win > 70) return "#FF3333";
      else if(this.win > 60) return "#FF5252";
      else if(this.win > 50) return "#FF8585";
      else return "#FFADAD";
    } else {
      if(this.win > 90) return "#0000A3";
      else if(this.win > 80) return "#0000CC";
      else if(this.win > 70) return "#0A0AFF";
      else if(this.win > 60) return "#5252FF";
      else if(this.win > 50) return "#9999FF";
      else return "#C2C2FF";
    }
  }
}

const ds1 = new DistrictSummary("M1-1", "Bryan Hughes", "r", 75);
const ds2 = new DistrictSummary("M1-2", "Bob Hall", "r", 59);
const ds3 = new DistrictSummary("M1-3", "Robert Nichols", "r", 78);
const ds4 = new DistrictSummary("M1-4", "Brandon Creighton", "r", 68);
const ds5 = new DistrictSummary("M1-5", "Charles Schwertner", "r", 55);
const ds6 = new DistrictSummary("M1-6", "Carol Alvarado", "d", 84);
const ds7 = new DistrictSummary("M1-7", "Paul Bettencourt", "r", 58);
const ds8 = new DistrictSummary("M1-8", "Angela Paxton", "r", 51);
const ds9 = new DistrictSummary("M1-9", "Kelly Hancock", "r", 54);
const ds10 = new DistrictSummary("M1-10", "Beverly Powell", "d", 52);
const ds11 = new DistrictSummary("M1-11", "Larry Taylor", "r", 60);
const ds12 = new DistrictSummary("M1-12", "Jane Nelson", "r", 62);
const ds13 = new DistrictSummary("M1-13", "Borris Miles", "r", 81);
const ds14 = new DistrictSummary("M1-14", "Kirk Watson", "d", 72);
const ds15 = new DistrictSummary("M1-15", "John Whitmire", "d", 65);
const ds16 = new DistrictSummary("M1-16", "Nathan Johnson", "d", 54);
const ds17 = new DistrictSummary("M1-17", "Joan Huffman", "r", 51);
const ds18 = new DistrictSummary("M1-18", "Lois Kolkhorst", "r", 66);
const ds19 = new DistrictSummary("M1-19", "Roland Gutierrez", "d", 50);
const ds20 = new DistrictSummary("M1-20", "Juan Hinojosa", "d", 59);
const ds21 = new DistrictSummary("M1-21", "Judith Zaffirini ", "d", 60);
const ds22 = new DistrictSummary("M1-22", "Brian Birdwell", "r", 69);
const ds23 = new DistrictSummary("M1-23", "Royce West", "d", 100);
const ds24 = new DistrictSummary("M1-24", "Dawn Buckingham", "r", 70);
const ds25 = new DistrictSummary("M1-25", "Donna Campbell", "r", 58);
const ds26 = new DistrictSummary("M1-26", "Jose Menendez", "r", 80);
const ds27 = new DistrictSummary("M1-27", "Eddie Lucio Jr", "r", 65);
const ds28 = new DistrictSummary("M1-28", "Charles Perry", "r", 100);
const ds29 = new DistrictSummary("M1-29", "Cesar Blanco ", "r", 67);
const ds30 = new DistrictSummary("M1-30", "Pat Fallon", "r", 74);
const ds31 = new DistrictSummary("M1-31", "Kel Seliger", "r", 88);




const ds = [ds1, ds2, ds3, ds4, ds5, ds6, ds7, ds8, ds9, ds10, 
            ds11, ds12, ds13, ds14, ds15, ds16, ds17, ds18, ds19, 
            ds20, ds21, ds22, ds23, ds24, ds25, ds26, ds27, ds28,
            ds29, ds30, ds31];

