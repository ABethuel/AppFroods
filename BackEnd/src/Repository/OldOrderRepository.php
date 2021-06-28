<?php

namespace App\Repository;

use App\Entity\OldOrder;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method OldOrder|null find($id, $lockMode = null, $lockVersion = null)
 * @method OldOrder|null findOneBy(array $criteria, array $orderBy = null)
 * @method OldOrder[]    findAll()
 * @method OldOrder[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OldOrderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OldOrder::class);
    }

    // /**
    //  * @return OldOrder[] Returns an array of OldOrder objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?OldOrder
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
