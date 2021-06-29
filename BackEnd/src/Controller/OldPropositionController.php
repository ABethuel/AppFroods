<?php

namespace App\Controller;

use App\Repository\OldPropositionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OldPropositionController extends AbstractController
{
    /**
     * @Route("/oldProposition", name="old_proposition", method={GET})
     * @param OldPropositionRepository $oldPropositionRepository
     * @return Response
     */
    public function index(OldPropositionRepository $oldPropositionRepository): Response
    {
        $oldProposition = $oldPropositionRepository->findAll();
        return $this->json($oldProposition, 200, []);
    }
}
