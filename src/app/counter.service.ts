export class CounterService {
  activeCount = 0;
  inactiveCount = 0;

  incrementActive() {
    this.activeCount++;
    console.log('Active Count: ' + this.activeCount);
  }

  incrementInactive() {
    this.inactiveCount++;
    console.log('Inactive Count: ' + this.inactiveCount);
  }
}
