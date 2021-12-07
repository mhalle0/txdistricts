export class DistrictSummary {
  constructor(
    public id: string,
    public rep: string,
    public party: string,
    public winPercent: number
  ) {}
  
  displayParty(format: string): string {
    if(format === "short") return (this.party === "d") ? "D" : "R";
    else return (this.party === "d") ? "Democrat" : "Republican";
  }

  victory(): string {
    if(this.winPercent === 50) return "<1%";
    else return (this.winPercent - 50).toString() + "%";
  }

  shade():string {
    if(this.party == "r") {
      return (this.winPercent > 90) ? "#E00000"
      : (this.winPercent > 80) ? "#FF1F1F"
      : (this.winPercent > 70) ? "#FF3333"
      : (this.winPercent > 60) ? "#FF5252"
      : (this.winPercent > 50) ? "#FF8585"
      : "#FFADAD";
    } else {
      return (this.winPercent > 90) ? "#0000A3"
      : (this.winPercent > 80) ? "#0000CC"
      : (this.winPercent > 70) ? "#0A0AFF"
      : (this.winPercent > 60) ? "#5252FF"
      : (this.winPercent > 50) ? "#9999FF"
      : "#C2C2FF";
    }
  }
}

const ds1 = new DistrictSummary("M2100-1", "Bryan Hughes", "r", 75);
const ds2 = new DistrictSummary("M2100-2", "Bob Hall", "r", 59);
const ds3 = new DistrictSummary("M2100-3", "Robert Nichols", "r", 78);
const ds4 = new DistrictSummary("M2100-4", "Brandon Creighton", "r", 68);
const ds5 = new DistrictSummary("M2100-5", "Charles Schwertner", "r", 55);
const ds6 = new DistrictSummary("M2100-6", "Carol Alvarado", "d", 84);
const ds7 = new DistrictSummary("M2100-7", "Paul Bettencourt", "r", 58);
const ds8 = new DistrictSummary("M2100-8", "Angela Paxton", "r", 51);
const ds9 = new DistrictSummary("M2100-9", "Kelly Hancock", "r", 54);
const ds10 = new DistrictSummary("M2100-10", "Beverly Powell", "d", 52);
const ds11 = new DistrictSummary("M2100-11", "Larry Taylor", "r", 60);
const ds12 = new DistrictSummary("M2100-12", "Jane Nelson", "r", 62);
const ds13 = new DistrictSummary("M2100-13", "Borris Miles", "r", 81);
const ds14 = new DistrictSummary("M2100-14", "Kirk Watson", "d", 72);
const ds15 = new DistrictSummary("M2100-15", "John Whitmire", "d", 65);
const ds16 = new DistrictSummary("M2100-16", "Nathan Johnson", "d", 54);
const ds17 = new DistrictSummary("M2100-17", "Joan Huffman", "r", 51);
const ds18 = new DistrictSummary("M2100-18", "Lois Kolkhorst", "r", 66);
const ds19 = new DistrictSummary("M2100-19", "Roland Gutierrez", "d", 50);
const ds20 = new DistrictSummary("M2100-20", "Juan Hinojosa", "d", 59);
const ds21 = new DistrictSummary("M2100-21", "Judith Zaffirini ", "d", 60);
const ds22 = new DistrictSummary("M2100-22", "Brian Birdwell", "r", 69);
const ds23 = new DistrictSummary("M2100-23", "Royce West", "d", 100);
const ds24 = new DistrictSummary("M2100-24", "Dawn Buckingham", "r", 70);
const ds25 = new DistrictSummary("M2100-25", "Donna Campbell", "r", 58);
const ds26 = new DistrictSummary("M2100-26", "Jose Menendez", "r", 80);
const ds27 = new DistrictSummary("M2100-27", "Eddie Lucio Jr", "r", 65);
const ds28 = new DistrictSummary("M2100-28", "Charles Perry", "r", 100);
const ds29 = new DistrictSummary("M2100-29", "Cesar Blanco ", "r", 67);
const ds30 = new DistrictSummary("M2100-30", "Pat Fallon", "r", 74);
const ds31 = new DistrictSummary("M2100-31", "Kel Seliger", "r", 88);

export const ds2100 = [ds1, ds2, ds3, ds4, ds5, ds6, ds7, ds8, ds9, ds10, 
            ds11, ds12, ds13, ds14, ds15, ds16, ds17, ds18, ds19, 
            ds20, ds21, ds22, ds23, ds24, ds25, ds26, ds27, ds28,
            ds29, ds30, ds31];

