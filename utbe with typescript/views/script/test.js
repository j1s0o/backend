const { fromEvent, of } = rxjs;
const { delay, takeUntil, flatMap } = rxjs.operators;
const card = document.querySelector('.clip');
const mouseEnter$ = fromEvent(card, 'mouseenter');
const mouseLeave$ = fromEvent(card, 'mouseleave');

mouseEnter$.subscribe(() => {
  console.log('enter');
  card.classList.add('hoverable');
});


mouseEnter$.pipe(
  flatMap(e => of(e).pipe(
    delay(2500),
    takeUntil(mouseLeave$)
  )) 
).subscribe(() => {
  card.classList.remove('hoverable');
  card.classList.add('show-play-icon');
  console.log('remove');
})

mouseLeave$.subscribe(() => {
  card.classList.remove('hoverable');
  card.classList.remove('show-play-icon');
});