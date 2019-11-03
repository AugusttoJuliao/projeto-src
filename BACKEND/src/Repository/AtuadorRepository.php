<?php

namespace App\Repository;

use App\Entity\Atuador;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Atuador|null find($id, $lockMode = null, $lockVersion = null)
 * @method Atuador|null findOneBy(array $criteria, array $orderBy = null)
 * @method Atuador[]    findAll()
 * @method Atuador[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AtuadorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Atuador::class);
    }

    // /**
    //  * @return Atuador[] Returns an array of Atuador objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Atuador
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
