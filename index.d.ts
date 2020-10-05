declare module "rn-apple-healthkit" {
  export interface HealthKitPermissions {
    permissions: {
      read: string[];
      write: string[];
    };
  }
  export interface MindfulSessionData {
    startDate?: Date;
    endDate?: Date;
    limit?: number;
  }

  export enum HealthActivity {
    americanFootball = 1,
    archery = 2,
    australianFootball = 3,
    badminton = 4,
    baseball = 5,
    basketball = 6,
    bowling = 7,
    boxing = 8,
    climbing = 9,
    cricket = 10,
    crossTraining = 11,
    curling = 12,
    cycling = 13,
    dance = 14,
    elliptical = 16,
    equestrianSports = 17,
    fencing = 18,
    fishing = 19,
    functionalStrengthTraining = 20,
    golf = 21,
    gymnastics = 22,
    handball = 23,
    hiking = 24,
    hockey = 25,
    hunting = 26,
    lacrosse = 27,
    martialArts = 28,
    mindAndBody = 29,
    paddleSports = 31,
    play = 32,
    preparationAndRecovery = 33,
    racquetball = 34,
    rowing = 35,
    rugby = 36,
    running = 37,
    sailing = 38,
    skatingSports = 39,
    snowSports = 40,
    soccer = 41,
    softball = 42,
    squash = 43,
    stairClimbing = 44,
    surfingSports = 45,
    swimming = 46,
    tableTennis = 47,
    tennis = 48,
    trackAndField = 49,
    traditionalStrengthTraining = 50,
    volleyball = 51,
    walking = 52,
    waterFitness = 53,
    waterPolo = 54,
    waterSports = 55,
    wrestling = 56,
    yoga = 57,
    barre = 58,
    coreTraining = 59,
    crossCountrySkiing = 60,
    downhillSkiing = 61,
    flexibility = 62,
    highIntensityIntervalTraining = 63,
    jumpRope = 64,
    kickboxing = 65,
    pilates = 66,
    snowboarding = 67,
    stairs = 68,
    stepTraining = 69,
    wheelchairWalkPace = 70,
    wheelchairRunPace = 71,
    taiChi = 72,
    mixedCardio = 73,
    handCycling = 74,
    discSports = 75,
    fitnessGaming = 76,
    other = 3000,
  }

  export interface WorkoutOptions {
    type?: HealthActivity; // default = core training
    startDate?: string; // ISO date
    endDate?: string; // ISO date
    duration?: number; // default = 0
    energyBurned?: number; // default = 0
    energyBurnedUnit?: HealthUnit; // default = kilocalorie
    totalDistance?: number; // default = 0
    totalDistanceUnit?: HealthUnit; // default = meter
  }

  export interface AppleHealthKit {
    initHealthKit(
      permissions: HealthKitPermissions,
      callback: (error: string, result: Object) => void
    ): void;

    saveFood(
      options: Object,
      callback: (error: string, result: Object) => void
    ): void;

    isAvailable(callback: (error: Object, results: boolean) => void): void;

    getDateOfBirth(
      options: any,
      callback: (error: Object, results: HealthDateOfBirth) => void
    ): void;

    getLatestHeight(
      options: HealthUnitOptions,
      callback: (err: string, results: HealthValue) => void
    ): void;

    getLatestWeight(
      options: HealthUnitOptions,
      callback: (err: string, results: HealthValue) => void
    ): void;

    getMindfulSession(
      options: MindfulSessionData,
      callback: (err: string, results: HealthValue) => void
    ): void;

    getStepCount(
      options: any,
      callback: (err: string, results: HealthValue) => void
    ): void;

    saveWorkout(
      options: WorkoutOptions,
      onSave: (error?: Error, response?: { success: boolean }) => void
    ): void;
  }

  export interface HealthDateOfBirth {
    value: string;
    age: number;
  }

  export interface HealthValue {
    value: number;
    startDate: string;
    endDate: string;
  }

  export interface HealthUnitOptions {
    unit: HealthUnit;
  }
  export enum HealthUnit {
    bpm = "bpm",
    calorie = "calorie",
    celsius = "celsius",
    count = "count",
    day = "day",
    fahrenheit = "fahrenheit",
    foot = "foot",
    gram = "gram",
    hour = "hour",
    inch = "inch",
    joule = "joule",
    meter = "meter",
    mgPerdL = "mgPerdL",
    mile = "mile",
    minute = "minute",
    mmhg = "mmhg",
    mmolPerL = "mmolPerL",
    percent = "percent",
    pound = "pound",
    second = "second",
  }

  const appleHealthKit: AppleHealthKit;
  export default appleHealthKit;
}
