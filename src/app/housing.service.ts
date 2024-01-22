import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  url = 'http://localhost:3000/locations';
  constructor() {}

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const res = await fetch(this.url);
    return (await res.json()) ?? {};
  }

  async getHousingLocationById(
    id: number,
  ): Promise<Housinglocation | undefined> {
    const res = await fetch(`${this.url}/${id}`);
    return await res.json();
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
