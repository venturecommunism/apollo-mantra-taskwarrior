import {Timer} from '/lib/collections/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
    Meteor.methods({
        'timer.set'(timerId, time) {
            check(timerId, String);
            check(time, Number);

            const timer = Timer.findOne(timerId);
            timer.time = time;

            return Timer.update({_id: timerId}, timer);
        },
        'home.create.timer'(duration) {
            check(duration, Number);
            let time = 0;

            const createdAt = new Date();
            time = (duration)*1000;
            const counting = false;
            const owner = Meteor.userId();
            const newTimer = {duration, time, owner, counting, createdAt};
            return Timer.insert(newTimer);
        },
        'timer.reset'(timerId) {
            check(timerId, String);
            const timer = Timer.findOne(timerId);
            timer.counting = false;
            delete timer.ended

            timer.time = timer.duration * 1000
            return Timer.update({_id: timerId}, timer);
        },
        'timer.counting'(timerId, counting) {
            check(timerId, String);
            check(counting, Boolean);

            const timer = Timer.findOne(timerId);
            timer.counting = counting;

            return Timer.update({_id: timerId}, timer);
        },
        'timer.end'(timerId) {
            check(timerId, String);
            const timer = Timer.findOne(timerId);
            timer.counting = false;
            timer.ended = true;

            return Timer.update({_id: timerId}, timer);
        }
    });
}
