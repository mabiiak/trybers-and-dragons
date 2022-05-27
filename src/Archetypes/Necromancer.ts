import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  energy: EnergyType;
  static archetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
  }

  get energyType():EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    this.archetypesInstances += 1;
    return this.archetypesInstances;
  }
}

export default Necromancer;
