import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[postsSrcDebounce]',
})
export class SrcDebounceDirective implements OnChanges, OnDestroy {

  private srcDebounced = '';

  private src$ = new Subject<string>();

  private subUnsubscribe = new Subject<void>();

  @Input()
  public postsSrcDebounce?: string;

  constructor(
  ) {
    this.src$.pipe(
      takeUntil(this.subUnsubscribe),
      debounceTime(1000),
    ).subscribe(
      (src: string) => this.srcDebounced = src,
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.postsSrcDebounce) {
      this.src$.next(this.postsSrcDebounce);
    }
  }

  public ngOnDestroy(): void {
    this.subUnsubscribe.next();
    this.subUnsubscribe.complete();
  }

  @HostBinding('attr.src')
  public get src(): string {
    return this.srcDebounced;
  }

}
