import hgImage from '../src/images/hg-details.png';
import mgImage from '../src/images/mg-details.png'; // Gambar tambahan untuk MG
import pgImage from '../src/images/pg-details.png'; // Gambar tambahan untuk PG
import rgImage from '../src/images/rg-details.png'; // Gambar tambahan untuk RG

const gradeData = {
  HG: {
    description: 'High Grade (HG) adalah skala model Gunpla dengan detail yang bagus dan harga yang terjangkau. Biasanya berukuran 1/144.',
    additionalImage: hgImage
  },
  MG: {
    description: 'Master Grade (MG) menawarkan detail yang lebih baik dan lebih banyak fitur dibandingkan HG. Biasanya berukuran 1/100.',
    additionalImage: mgImage
  },
  PG: {
    description: 'Perfect Grade (PG) adalah skala model Gunpla premium dengan detail dan ukuran terbesar. Biasanya berukuran 1/60.',
    additionalImage: pgImage
  },
  RG: {
    description: 'Real Grade (RG) adalah skala model Gunpla dengan detail tingkat tinggi dan skala 1/144. Menggabungkan teknologi HG dan MG.',
    additionalImage: rgImage
  }
};

export default gradeData;
