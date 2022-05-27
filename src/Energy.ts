export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  _type: EnergyType,
  amount: number,
}
