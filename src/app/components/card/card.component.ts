import { Component } from '@angular/core';
import { BOOK_DEFINITIONS_DATA } from '../../components/data';


export interface BookDefinitions {
  book_name: string;
  book_description: string;
  book_page_number: number;
  book_image: string;
  book_image_lightRoom: string;
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  bookCards: BookDefinitions[] = [];
  datasource: BookDefinitions[] = BOOK_DEFINITIONS_DATA;

  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages!: number;

  ngOnInit() {
    this.totalPages = Math.ceil(this.datasource.length / this.itemsPerPage);
    this.updatePaginatedBooks();
  }

  updatePaginatedBooks() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.bookCards = this.datasource.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedBooks();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedBooks();
    }
  }

  lightboxImage: string | null = null;

  openLightbox(imageUrl: string): void {
    this.lightboxImage = imageUrl;
  }

  closeLightbox(): void {
    this.lightboxImage = null;
  }

}
