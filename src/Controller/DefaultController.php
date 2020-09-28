<?php

namespace App\Controller;

use App\Entity\Customers;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');

        //return $this->render('@HomeBundle/Default/index.html.twig');
    }

    /**
     * @Route("/api/companies", name="companies")
     * @return Response
     */

    public function getCompanies(EntityManagerInterface $entityManager)
    {
        // getRepository get the Entity
        $companies= $entityManager->getRepository(Customers::class)->findBy([]);

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($companies));

        return $response;
    }

    /**
     * @Route("/api/add-customer", name="addCustomer")
     * @return Response
     */

    public function addCustomer(EntityManagerInterface $entityManager)
    {
        $customer = new Customer();
        $customer->setFirstName();
        $customer->setLastName();
        $customer->setAddress();

        // adding to the Entity
        $entityManager->persist($customer);
        $entityManager->flush();

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($customers));

        return $response;
    }

    /**
     * @Route("/api/customers", name="customers")
     * @return Response
     */

    public function getCustomers(EntityManagerInterface $entityManager)
    {
        // getRepository get the Entity
        $customers= $entityManager->getRepository(Customers::class)->findBy([]);

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($companies));

        return $response;
    }
}