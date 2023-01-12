import { Injectable } from '@angular/core';
import { NavItemDto } from '../dto/nav-item';
import { NavMenuDto } from '../dto/nav-menu';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  constructor() {}

  getNavMenu(): NavMenuDto {
    return new NavMenuDto('NavMenu', [
      new NavItemDto('Startups', 'domain', 'admin', '/startup'),
      new NavItemDto('Sectors', 'dashboard', 'admin', '/sectors'),
      new NavItemDto('Users', 'user', 'admin', '/users'),

      new NavItemDto(
        'Sectors',
        'dashboard',
        'enduser',
        '/sectors/request-sector'
      ),
      new NavItemDto(
        'Startups',
        'domain',
        'enduser',
        '/startup/request-startup'
      )
    ]);
  }
}
