class User {
  constructor(readonly firstName: string, readonly familyName: string) {}

  toString(): string {
    return `${this.firstName}, by ${this.familyName}`;
  }
}

export const userConverter = {
  toFirestore: (user: User): firebase.firestore.DocumentData => ({
    firstName: user.firstName,
    familyName: user.familyName,
  }),
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ): User {
    const data = snapshot.data(options);

    return new User(data.firstName, data.familyName);
  },
};
