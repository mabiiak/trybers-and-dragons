import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static racesInstances = 0;

  static createdRacesInstances(): number {
    this.racesInstances += 1;
    return this.racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
