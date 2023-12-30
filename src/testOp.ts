
import { defaultIfEmpty, filter, from, map, take } from 'rxjs'




from([1, 2, 3])
    .pipe(
        filter(value => value < 2),
        map(value => value * 2),
        take(1),
        defaultIfEmpty('final no value')
    )
    .subscribe({
        next: value => console.log(value)
    })