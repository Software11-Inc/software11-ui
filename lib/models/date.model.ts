/**
 * Interface representing a date in terms of seconds and nanoseconds.
 * This format is commonly used in systems where high precision time stamps are required,
 * such as databases that store creation or modification times down to the nanosecond.
 */
export interface IDate {
  _seconds: number; // The number of seconds since the Unix epoch
  _nanoseconds: number; // The number of nanoseconds after the second
}
