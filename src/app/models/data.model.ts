export interface dataInterface {
  name?: string;
  type?: string;
  muscle?: string;
  equipment?: string;
  difficulty?: string;
  instructions?: string;
}

export interface dataStateModel {
  itemState: dataInterface[];
}
