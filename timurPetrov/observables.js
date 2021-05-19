import { Subject } from 'rxjs';

export const positionObs = new Subject();

export const setPosition = () => {
    positionObs.next(200);
};