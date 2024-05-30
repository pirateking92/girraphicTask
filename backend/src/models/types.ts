export interface Athlete {
  rank: number;
  firstname: string;
  surname: string;
  athleteid: string;
  finishtime: string;
  raceprogress: string;
  teamname: string;
  bibnumber: string;
  flag: string;
  countryname: string;
}

export interface RaceResults {
  results: {
    raceStatus: string;
    gender: string;
    racename: string;
    tod: string;
    lastupdated: string;
    racelength: number;
    athletes: Athlete[];
  };
}
