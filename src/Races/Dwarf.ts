import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80 ;
  private static racesInstances = 0;

  static createdRacesInstances(): number {
    this.racesInstances += 1;
    return this.racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
