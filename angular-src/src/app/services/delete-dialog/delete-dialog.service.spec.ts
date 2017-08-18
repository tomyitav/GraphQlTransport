import { TestBed, inject } from '@angular/core/testing';

import { DeleteDialogService } from './delete-dialog.service';

describe('DeleteDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteDialogService]
    });
  });

  it('should be created', inject([DeleteDialogService], (service: DeleteDialogService) => {
    expect(service).toBeTruthy();
  }));
});
