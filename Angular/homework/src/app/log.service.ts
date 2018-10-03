import { Injectable } from '@angular/core';

export class LogService {

  write(message: string) {
    console.log(message);
  }
}
