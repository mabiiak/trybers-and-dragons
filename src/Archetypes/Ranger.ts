import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  energy: EnergyType;
  static archetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
  }

  get energyType():EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    this.archetypesInstances += 1;
    return this.archetypesInstances;
  }
}

export default Ranger;
