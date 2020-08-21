import { types, Instance } from "mobx-state-tree";

export const RootStoreModel = types.model("RootStore").props({});

export interface RootStore extends Instance<typeof RootStoreModel> {}
type RootStoreSnapshotType = typeof RootStoreModel.SnapshotType;
export interface RootStoreSnapshot extends RootStoreSnapshotType {}
