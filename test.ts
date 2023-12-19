import { Observable, Observer, Subject, Subscriber, asyncScheduler, bindCallback, from, fromEvent, interval, of, subscribeOn, throwError } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { map, filter, scan, mergeMap , take, toArray, multicast, observeOn, shareReplay, catchError, takeUntil } from 'rxjs/operators';

// import { interval } from 'rxjs/observable/interval';

/**
 * 取每第N个值的操作符
 */
const takeEveryNth = (n: number) => <T>(source: Observable<T>) =>
  new Observable<T>(observer => {
    let count = 0;
    return source.subscribe({
      next(x) {
        if (count++ % n === 0) observer.next(x);
      },
      error(err) { observer.error(err); },
      complete() { observer.complete(); }
    })
  });


  

new Subject()
    .asObservable()
    .pipe(
        observeOn(asyncScheduler), 
        shareReplay(2),
        catchError((error, caught) => {
            console.log(error + caught);
            return of([])
        })
    )
    .subscribe({
        next: (val) => {

        },
        error: (err) => {

        },
        complete: () => {

        }});


  function mySimpleOperator(someCallback: (a:any) => void) {
    // 注意这里返回的是函数
    return function mySimpleOperatorImplementation(source: any) {
      return new Observable(subscriber => {
        var subscription = source.subscribe(value => {
          try {
            subscriber.next(someCallback(value));
          } catch(err) {
            subscriber.error(err);
          }
        },
        err => subscriber.error(err),
        () => subscriber.complete());
  
        return subscription;
     });
    }
  }  

takeEveryNth(5)

interval(1000).pipe(
    takeEveryNth(2),
    filter(x => x > 2)
).subscribe(
    (val) => console.log(val),
    (err) => console
)
const ob : Observable<String> = Observable.create((subscriber: Observer<String>) => subscriber.next('34')).subscribe

throwError

ob.subscribe()

fromPromise

of(1,2)
.pipe(
    map((x) => x *x), 
    filter(x => x > 1),
    mergeMap()
).subscribe({
    next: (x:number) => {console.log(x)}
})


bindCallback

Observable.prototype.pipe()